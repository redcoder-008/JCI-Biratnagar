import 'dotenv/config';
import bcrypt from 'bcryptjs';
import cloudinary from 'cloudinary';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import multer from 'multer';
import streamifier from 'streamifier';

const required = ['MONGODB_URI', 'JWT_SECRET'];
const app = express();
const port = process.env.PORT || 5000;
const imageUpload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: (_, file, done) => done(null, /^image\/(jpeg|png|webp)$/.test(file.mimetype)) });

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || 'http://localhost:5173', credentials: false }));
app.use(express.json({ limit: '1mb' }));
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, max: 15 }));

const baseOptions = { timestamps: true, versionKey: false };
const User = mongoose.model('User', new mongoose.Schema({ email: { type: String, required: true, unique: true, lowercase: true, trim: true }, passwordHash: { type: String, required: true }, role: { type: String, default: 'admin' } }, baseOptions));
const Member = mongoose.model('Member', new mongoose.Schema({ name: { type: String, required: true, trim: true, index: true }, position: { type: String, trim: true }, category: { type: String, default: 'Member', index: true }, image: String, imagePublicId: String, email: String, phone: String, bio: String, order: { type: Number, default: 999, index: true }, status: { type: String, enum: ['active', 'inactive'], default: 'active', index: true } }, baseOptions));
const Event = mongoose.model('Event', new mongoose.Schema({ title: { type: String, required: true }, description: String, date: Date, time: String, location: String, status: { type: String, enum: ['upcoming', 'completed'], default: 'upcoming', index: true }, image: String, imagePublicId: String }, baseOptions));
const Notice = mongoose.model('Notice', new mongoose.Schema({ title: { type: String, required: true }, content: { type: String, required: true }, date: { type: Date, default: Date.now }, published: { type: Boolean, default: false, index: true }, important: { type: Boolean, default: false, index: true }, image: String, documentUrl: String }, baseOptions));
const Gallery = mongoose.model('Gallery', new mongoose.Schema({ title: String, caption: String, imageUrl: { type: String, required: true }, publicId: String, album: { type: String, default: 'General', index: true } }, baseOptions));
const Message = mongoose.model('Message', new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, required: true }, phone: String, subject: { type: String, required: true }, message: { type: String, required: true }, read: { type: Boolean, default: false, index: true } }, baseOptions));
const Setting = mongoose.model('Setting', new mongoose.Schema({ organizationName: { type: String, default: 'JCI Biratnagar' }, logo: String, contactEmail: String, phone: String, address: String, socialLinks: { facebook: String, instagram: String, tiktok: String }, aboutText: String, footerText: String }, baseOptions));

const tokenFor = (user) => jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });
const authenticate = async (req, res, next) => { try { const token = req.headers.authorization?.replace('Bearer ', ''); if (!token) return res.status(401).json({ message: 'Authentication required.' }); req.user = jwt.verify(token, process.env.JWT_SECRET); next(); } catch { res.status(401).json({ message: 'Invalid or expired session.' }); } };
const asyncRoute = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
const uploadToCloudinary = (file) => new Promise((resolve, reject) => { if (!process.env.CLOUDINARY_CLOUD_NAME) return reject(new Error('Cloudinary is not configured.')); const upload = cloudinary.v2.uploader.upload_stream({ folder: 'jci-biratnagar' }, (error, result) => error ? reject(error) : resolve(result)); streamifier.createReadStream(file.buffer).pipe(upload); });

app.get('/api/health', (_, res) => res.json({ ok: true, database: mongoose.connection.readyState === 1 }));
app.post('/api/auth/bootstrap', asyncRoute(async (req, res) => { if (!process.env.ADMIN_BOOTSTRAP_TOKEN || req.body.token !== process.env.ADMIN_BOOTSTRAP_TOKEN) return res.status(403).json({ message: 'Bootstrap is unavailable.' }); if (await User.exists({})) return res.status(409).json({ message: 'An administrator already exists.' }); const { email, password } = req.body; if (!email || !password || password.length < 12) return res.status(400).json({ message: 'Use a valid email and a password of at least 12 characters.' }); const user = await User.create({ email, passwordHash: await bcrypt.hash(password, 12) }); res.status(201).json({ token: tokenFor(user), user: { email: user.email, role: user.role } }); }));
app.post('/api/auth/login', asyncRoute(async (req, res) => { const user = await User.findOne({ email: String(req.body.email || '').toLowerCase() }); if (!user || !(await bcrypt.compare(req.body.password || '', user.passwordHash))) return res.status(401).json({ message: 'Invalid email or password.' }); res.json({ token: tokenFor(user), user: { email: user.email, role: user.role } }); }));
app.get('/api/auth/me', authenticate, asyncRoute(async (req, res) => { const user = await User.findById(req.user.id).select('email role'); res.json(user); }));

const publicList = (path, Model, filter = {}) => app.get(`/api/${path}`, asyncRoute(async (req, res) => res.json(await Model.find(filter).sort({ order: 1, date: -1, createdAt: -1 }))));
const adminCrud = (path, Model) => { const route = `/api/${path}`; app.get(`${route}/admin`, authenticate, asyncRoute(async (_, res) => res.json(await Model.find().sort({ order: 1, createdAt: -1 })))); app.post(route, authenticate, asyncRoute(async (req, res) => res.status(201).json(await Model.create(req.body)))); app.put(`${route}/:id`, authenticate, asyncRoute(async (req, res) => { const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: 'Record not found.' }); res.json(item); })); app.delete(`${route}/:id`, authenticate, asyncRoute(async (req, res) => { const item = await Model.findByIdAndDelete(req.params.id); if (!item) return res.status(404).json({ message: 'Record not found.' }); res.status(204).end(); })); };

publicList('members', Member, { status: 'active' }); adminCrud('members', Member);
app.get('/api/leadership', asyncRoute(async (_, res) => res.json(await Member.find({ category: 'Leadership', status: 'active' }).sort({ order: 1 })))); app.get('/api/leadership/admin', authenticate, asyncRoute(async (_, res) => res.json(await Member.find({ category: 'Leadership' }).sort({ order: 1 }))));
publicList('events', Event); adminCrud('events', Event); publicList('notices', Notice, { published: true }); adminCrud('notices', Notice); publicList('gallery', Gallery); adminCrud('gallery', Gallery);
app.post('/api/messages', asyncRoute(async (req, res) => res.status(201).json(await Message.create(req.body)))); app.get('/api/messages', authenticate, asyncRoute(async (_, res) => res.json(await Message.find().sort({ createdAt: -1 })))); app.put('/api/messages/:id', authenticate, asyncRoute(async (req, res) => res.json(await Message.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })))); app.delete('/api/messages/:id', authenticate, asyncRoute(async (req, res) => { await Message.findByIdAndDelete(req.params.id); res.status(204).end(); }));
app.get('/api/settings', asyncRoute(async (_, res) => res.json((await Setting.findOne()) || {}))); app.put('/api/settings', authenticate, asyncRoute(async (req, res) => res.json(await Setting.findOneAndUpdate({}, req.body, { upsert: true, new: true, runValidators: true }))));
app.post('/api/uploads/image', authenticate, imageUpload.single('image'), asyncRoute(async (req, res) => { if (!req.file) return res.status(400).json({ message: 'A JPEG, PNG, or WebP image under 5 MB is required.' }); const result = await uploadToCloudinary(req.file); res.status(201).json({ imageUrl: result.secure_url, publicId: result.public_id }); }));
app.get('/api/dashboard', authenticate, asyncRoute(async (_, res) => { const [totalMembers, activeMembers, leadershipMembers, totalEvents, upcomingEvents, totalNotices, galleryImages, contactMessages] = await Promise.all([Member.countDocuments(), Member.countDocuments({ status: 'active' }), Member.countDocuments({ category: 'Leadership' }), Event.countDocuments(), Event.countDocuments({ status: 'upcoming' }), Notice.countDocuments(), Gallery.countDocuments(), Message.countDocuments()]); res.json({ totalMembers, activeMembers, leadershipMembers, totalEvents, upcomingEvents, totalNotices, galleryImages, contactMessages }); }));
app.use((error, _, res, __) => { console.error(error); res.status(error.name === 'ValidationError' ? 400 : 500).json({ message: error.message || 'Unexpected server error.' }); });

if (required.some((key) => !process.env[key])) console.warn(`Missing environment variables: ${required.filter((key) => !process.env[key]).join(', ')}`);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jci-biratnagar', { serverSelectionTimeoutMS: 10000 }).then(() => app.listen(port, () => console.log(`API listening on ${port}`))).catch((error) => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
  





if (false) mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
  });

if (false) app.listen(5000, () => {
  console.log("Server running on port 5000");
});

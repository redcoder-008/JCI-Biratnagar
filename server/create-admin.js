import 'dotenv/config';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import 'dotenv/config';
import dns from 'node:dns/promises';

dns.setServers(['1.1.1.1', '8.8.8.8']);


const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!process.env.MONGODB_URI || !email || !password) {
  throw new Error('MONGODB_URI, ADMIN_EMAIL, and ADMIN_PASSWORD are required.');
}

const userSchema = new mongoose.Schema({ email: { type: String, required: true, unique: true, lowercase: true, trim: true }, passwordHash: { type: String, required: true }, role: { type: String, default: 'admin' } }, { timestamps: true, versionKey: false });
const User = mongoose.models.User || mongoose.model('User', userSchema);

await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
const passwordHash = await bcrypt.hash(password, 12);
await User.findOneAndUpdate({ email: email.toLowerCase() }, { email: email.toLowerCase(), passwordHash, role: 'admin' }, { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true });
await mongoose.disconnect();
console.log('Admin user created or updated.');
  

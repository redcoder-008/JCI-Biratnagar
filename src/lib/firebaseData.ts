import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export type RecordData = Record<string, unknown> & { id: string; createdAt?: Timestamp; updatedAt?: Timestamp };
const records = (snap: Awaited<ReturnType<typeof getDocs>>) => snap.docs.map((item) => ({ id: item.id, ...(item.data() as Record<string, unknown>) }) as RecordData);
const publicFilters: Record<string, [string, unknown] | undefined> = { members: ['status', 'active'], leadership: ['status', 'active'], events: undefined, notices: ['published', true], gallery: undefined };

export const listRecords = async (resource: string, admin = false) => {
  const collectionName = resource === 'leadership' ? 'members' : resource;
  const filter = !admin ? publicFilters[resource] : undefined;
  const constraints = filter ? [where(filter[0], '==', filter[1])] : [];
  const snapshot = await getDocs(query(collection(db(), collectionName), ...constraints));
  const items = records(snapshot);
  if (resource === 'leadership') return items.filter((item) => item.category === 'Leadership');
  return items;
};

export const subscribeRecords = (resource: string, callback: (items: RecordData[]) => void, onError: (error: Error) => void) => {
  const collectionName = resource === 'leadership' ? 'members' : resource;
  const filter = publicFilters[resource];
  return onSnapshot(query(collection(db(), collectionName), ...(filter ? [where(filter[0], '==', filter[1])] : [])),
    (snapshot) => callback(records(snapshot).filter((item) => resource !== 'leadership' || item.category === 'Leadership')),
    onError);
};

export const createRecord = (resource: string, values: Record<string, unknown>) => addDoc(collection(db(), resource === 'leadership' ? 'members' : resource), { ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
export const updateRecord = (resource: string, id: string, values: Record<string, unknown>) => updateDoc(doc(db(), resource === 'leadership' ? 'members' : resource, id), { ...values, updatedAt: serverTimestamp() });
export const removeRecord = async (resource: string, item: RecordData) => {
  if (typeof item.storagePath === 'string' && item.storagePath) await deleteObject(ref(storage(), item.storagePath)).catch(() => undefined);
  await deleteDoc(doc(db(), resource === 'leadership' ? 'members' : resource, item.id));
};
export const saveSettings = (values: Record<string, unknown>) => setDoc(doc(db(), 'settings', 'organization'), { ...values, updatedAt: serverTimestamp() }, { merge: true });
export const getSettings = async () => { const snapshot = await getDoc(doc(db(), 'settings', 'organization')); return snapshot.exists() ? ({ id: snapshot.id, ...snapshot.data() } as RecordData) : undefined; };
export const uploadImage = async (resource: string, id: string, file: File) => {
  if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type) || file.size > 5 * 1024 * 1024) throw new Error('Choose a JPEG, PNG, WebP, or GIF image under 5 MB.');
  const extension = file.name.split('.').pop()?.replace(/[^a-z0-9]/gi, '') || 'jpg';
  const path = `${resource}/${id}/${crypto.randomUUID()}.${extension}`;
  const target = ref(storage(), path);
  await uploadBytes(target, file, { contentType: file.type });
  return { imageUrl: await getDownloadURL(target), storagePath: path };
};
export const isAdmin = async (uid: string) => { const snapshot = await getDoc(doc(db(), 'admins', uid)); return snapshot.exists() && snapshot.data().active === true && snapshot.data().role === 'admin'; };

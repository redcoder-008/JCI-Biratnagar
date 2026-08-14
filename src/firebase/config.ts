import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missing = Object.entries(config).filter(([, value]) => !value).map(([key]) => key);
export const firebaseConfigured = missing.length === 0;

let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let dbInstance: Firestore | undefined;
let storageInstance: FirebaseStorage | undefined;

const requireFirebase = () => {
  if (!firebaseConfigured) throw new Error(`Firebase is not configured. Missing ${missing.join(', ')}.`);
};

export const firebaseApp = () => {
  requireFirebase();
  return app ??= getApps().length ? getApp() : initializeApp(config);
};
export const auth = () => {
  const value = authInstance ??= getAuth(firebaseApp());
  void setPersistence(value, browserLocalPersistence);
  return value;
};
export const db = () => dbInstance ??= getFirestore(firebaseApp());
export const storage = () => storageInstance ??= getStorage(firebaseApp());

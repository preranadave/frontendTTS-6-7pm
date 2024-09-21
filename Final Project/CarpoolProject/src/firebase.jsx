import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const  app  =  initializeApp({
 apiKey: "AIzaSyDeGgCNsX2RJGWgZNYlq-j2PTT_CSiS3nA",
 authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
 projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
 storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
 measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});

export const auth = getAuth(app);
export const db=getFirestore(app,'(default)')
export default app;
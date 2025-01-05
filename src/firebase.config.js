import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";





const firebaseConfig = {
  apiKey: "AIzaSyCSrysV4EpTlvDZi5KvWG3wU_p6A0JDAV0",
  authDomain: "mysterycubes.firebaseapp.com",
  projectId: "mysterycubes",
  storageBucket: "mysterycubes.firebasestorage.app",
  messagingSenderId: "792180880647",
  appId: "1:792180880647:web:f2ece4488ae9a90250c1a2",
  measurementId: "G-FZ00Y4YG2M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;

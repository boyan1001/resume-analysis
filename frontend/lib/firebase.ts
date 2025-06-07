import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAn673pZ8EIQoR7tJaNDfOMihqFeyf76vc",
  authDomain: "resume-f4b9b.firebaseapp.com",
  projectId: "resume-f4b9b",
  storageBucket: "resume-f4b9b.firebasestorage.app",
  messagingSenderId: "266766298092",
  appId: "1:266766298092:web:5cb2521267f5f182e26ec9",
  measurementId: "G-NE3KV3H2FW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6eK0JRZR7fnm2GTBCmV1TbiY-pWZ9p84",
  authDomain: "attendance-management-sy-1b8a0.firebaseapp.com",
  databaseURL:
    "https://attendance-management-sy-1b8a0-default-rtdb.firebaseio.com",
  projectId: "attendance-management-sy-1b8a0",
  storageBucket: "attendance-management-sy-1b8a0.appspot.com",
  messagingSenderId: "1005687494470",
  appId: "1:1005687494470:web:c41ec61bcf8934abaa3747",
  measurementId: "G-7SG306ELZJ",
};

const app = initializeApp(firebaseConfig);

export {
  app,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
};

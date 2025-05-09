import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Import Firebase Auth and required methods

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEuPDtfJovg4XFMDtm0AU-VGf8RMjNf-s",
  authDomain: "eco-code-17.firebaseapp.com",
  projectId: "eco-code-17",
  storageBucket: "eco-code-17.firebasestorage.app",
  messagingSenderId: "882493375800",
  appId: "1:882493375800:web:50520d69e724bb5b6e2dcd",
  measurementId: "G-7651H5E6ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, only if needed)
const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export Firebase services and functions
export {
  app, // Firebase app instance
  analytics, // Firebase Analytics instance
  auth, // Firebase Auth instance
  googleProvider, // Google Auth Provider instance
  signInWithPopup, // Function for Google Sign-In
  createUserWithEmailAndPassword, // Function for Email/Password Sign-Up
  signInWithEmailAndPassword, // Function for Email/Password Sign-In
};
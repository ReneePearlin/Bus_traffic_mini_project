import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 🔐 Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyATTUPboq4w0nwxubk5e5tL9ujOiSx03aU",
  authDomain: "trackmyride-5524a.firebaseapp.com",
  projectId: "trackmyride-5524a",
  storageBucket: "trackmyride-5524a.firebasestorage.app",
  messagingSenderId: "275723082314",
  appId: "1:275723082314:web:54b9c80fecba4e414b24b3",
  measurementId: "G-9P4N8QVMTE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  ref,
  onValue
};

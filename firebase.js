// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// ✅ Replace with your actual config values
const firebaseConfig = {
  apiKey: "AIzaSyATTUPboq4w0nwxubk5e5tL9ujOiSx03aU",
  authDomain: "trackmyride-5524a.firebaseapp.com",
  projectId: "trackmyride-5524a",
  storageBucket: "trackmyride-5524a.firebasestorage.app",
  messagingSenderId: "275723082314",
  appId: "1:275723082314:web:54b9c80fecba4e414b24b3",
  measurementId: "G-9P4N8QVMTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export {
  auth,
  provider,
  db,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  ref,
  onValue
};

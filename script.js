// script.js
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from './firebase.js';

// Email Login
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'dashboard.html';
    } catch (error) {
      alert('Login error: ' + error.message);
    }
  });
}

// Google Login
const googleBtn = document.getElementById('google-btn');
if (googleBtn) {
  googleBtn.addEventListener('click', async () => {
    googleBtn.disabled = true;
    try

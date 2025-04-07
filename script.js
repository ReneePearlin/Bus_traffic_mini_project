// script.js
import {
  auth,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword
} from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const googleBtn = document.getElementById('google-btn');
  const signupBtn = document.getElementById('signup-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, provider);
        window.location.href = "dashboard.html";
      } catch (error) {
        alert("Google login failed: " + error.message);
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
      } catch (error) {
        alert("Signup failed: " + error.message);
      }
    });
  }
});

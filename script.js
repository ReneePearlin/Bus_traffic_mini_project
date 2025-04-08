import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider
} from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const googleBtn = document.getElementById('google-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(err => alert("Login Error: " + err.message));
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then(() => window.location.href = "dashboard.html")
        .catch(err => alert("Google Sign-In Error: " + err.message));
    });
  }
});

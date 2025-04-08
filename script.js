import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider
} from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const googleBtn = document.getElementById('google-btn');

  // Email & Password Login
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("✅ Login successful:", userCredential.user);
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          console.error("❌ Login failed:", error.message);
          alert("Login failed: " + error.message);
        });
    });
  }

  // Google Sign-In
  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("✅ Google Sign-In successful:", result.user);
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          console.error("❌ Google Sign-In failed:", error.message);
          alert("Google Sign-In failed: " + error.message);
        });
    });
  }
});

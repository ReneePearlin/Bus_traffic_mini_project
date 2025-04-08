import {
  auth,
  signInWithEmailAndPassword
} from './firebase.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  
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
          window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
          console.error("❌ Login failed:", error.message);
          alert("Login failed: " + error.message);
        });
    });
  }
});

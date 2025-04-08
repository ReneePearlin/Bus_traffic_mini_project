import {
  auth,
  createUserWithEmailAndPassword
} from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('signup-btn');

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => window.location.href = "dashboard.html")
        .catch(err => alert("Signup Error: " + err.message));
    });
  }
});

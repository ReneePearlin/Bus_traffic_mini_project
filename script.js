import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from './firebase.js';

// Login with email/password
window.loginUser = function() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => alert("Login error: " + error.message));
}

// Google Sign-In
window.googleLogin = function() {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => alert("Google login failed: " + error.message));
}

// Sign up
window.signupUser = function() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(error => alert("Signup error: " + error.message));
}

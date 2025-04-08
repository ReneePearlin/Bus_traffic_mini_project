import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from './firebase.js';

// Email login
window.login = function () {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => alert("Login error: " + err.message));
};

// Google login
window.loginWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => alert("Google login failed: " + err.message));
};

// Signup
window.signUp = function () {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => alert("Signup error: " + err.message));
};

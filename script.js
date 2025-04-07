import {
  auth,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword
} from './firebase.js';

window.loginWithEmail = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
};

window.loginWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
};

window.signUp = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(e => alert(e.message));
};

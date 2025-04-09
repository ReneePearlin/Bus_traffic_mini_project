function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => alert("Login successful!"))
    .catch(err => alert("Login error: " + err.message));
}

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => alert("Sign up successful!"))
    .catch(err => alert("Sign up error: " + err.message));
}

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => alert("Google Sign-In successful!"))
    .catch(err => alert("Google Sign-In error: " + err.message));
}

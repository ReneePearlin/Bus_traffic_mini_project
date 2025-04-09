function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => alert("Login success!"))
    .catch(error => alert("Login failed: " + error.message));
}

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => alert("Signup success!"))
    .catch(error => alert("Signup failed: " + error.message));
}

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => alert("Google Sign-In success!"))
    .catch(error => alert("Google Sign-In failed: " + error.message));
}

// Email/password login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      showMenu(`Welcome back, ${userCredential.user.email}`);
    })
    .catch(error => alert("Login failed: " + error.message));
}

// Email/password signup
function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      showMenu(`Thanks for signing up, ${userCredential.user.email}`);
    })
    .catch(error => alert("Sign up failed: " + error.message));
}

// Google Sign-In
function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const name = result.user.displayName || result.user.email;
      showMenu(`Welcome, ${name}`);
    })
    .catch(error => alert("Google sign-in failed: " + error.message));
}

// Show menu screen
function showMenu(message) {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("menu-screen").classList.remove("hidden");
  document.getElementById("welcome-message").innerText = message;
}

// Navigation
function goBackToMenu() {
  document.getElementById("content-screen").classList.add("hidden");
  document.getElementById("menu-screen").classList.remove("hidden");
}

// Logout
function logout() {
  auth.signOut().then(() => {
    document.getElementById("menu-screen").classList.add("hidden");
    document.getElementById("auth-screen").classList.remove("hidden");
    alert("Logged out.");
  });
}

// Route Features
function showLiveRoutes() {
  switchContent("<h3>Live route tracking started...</h3>");
}

function showPastRoutes() {
  switchContent("<h3>Past route history:</h3><ul><li>Route 1</li><li>Route 2</li></ul>");
}

function showNotification(msg) {
  alert(msg);
}

function switchContent(content) {
  document.getElementById("menu-screen").classList.add("hidden");
  document.getElementById("content-screen").classList.remove("hidden");
  document.getElementById("content-area").innerHTML = content;
}

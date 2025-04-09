function handleGoogleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      const isNewUser = result.additionalUserInfo.isNewUser;
      const message = isNewUser ? `Welcome, ${user.displayName}! Thanks for signing up.` : `Welcome back, ${user.displayName}!`;

      document.getElementById("auth-screen").classList.add("hidden");
      document.getElementById("menu-screen").classList.remove("hidden");
      document.getElementById("welcome-message").innerText = message;
    })
    .catch(error => {
      console.error("Auth error:", error.message);
      alert("Authentication failed. Try again.");
    });
}

function showLiveRoutes() {
  switchToContent("<h3>Live route tracking started...</h3>");
}

function showPastRoutes() {
  switchToContent("<h3>Here are your past routes...</h3><ul><li>Route A</li><li>Route B</li></ul>");
}

function enableGeofencing() {
  startGeofencing();
  showNotification("Geofencing enabled.");
}

function showNotification(msg) {
  alert(msg);
}

function goBackToMenu() {
  document.getElementById("content-screen").classList.add("hidden");
  document.getElementById("menu-screen").classList.remove("hidden");
}

function switchToContent(htmlContent) {
  document.getElementById("menu-screen").classList.add("hidden");
  document.getElementById("content-screen").classList.remove("hidden");
  document.getElementById("content-area").innerHTML = htmlContent;
}

function logout() {
  auth.signOut().then(() => {
    document.getElementById("menu-screen").classList.add("hidden");
    document.getElementById("auth-screen").classList.remove("hidden");
    alert("Logged out.");
  });
}

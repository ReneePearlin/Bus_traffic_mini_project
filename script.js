function signInWithGoogle() {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(result => {
      alert(`Welcome, ${result.user.displayName}`);
      document.getElementById('main-menu').classList.add('hidden');
      document.getElementById('options-menu').classList.remove('hidden');
    })
    .catch(error => {
      alert('Sign-in error: ' + error.message);
    });
}

function showLiveRoutes() {
  document.getElementById('options-menu').classList.add('hidden');
  document.getElementById('content-display').classList.remove('hidden');
  document.getElementById('content').innerHTML = '<p>Live tracking in progress...</p>';
  // Simulate tracking
}

function showPastRoutes() {
  document.getElementById('options-menu').classList.add('hidden');
  document.getElementById('content-display').classList.remove('hidden');
  document.getElementById('content').innerHTML = '<p>Past route history will appear here.</p>';
}

function enableGeofencing() {
  startGeofencing();
  showNotification("Geofencing activated.");
}

function showNotification(msg) {
  alert(msg);
}

function goBack() {
  document.getElementById('options-menu').classList.add('hidden');
  document.getElementById('main-menu').classList.remove('hidden');
}

function goBackToOptions() {
  document.getElementById('content-display').classList.add('hidden');
  document.getElementById('options-menu').classList.remove('hidden');
}

// tracking.js
import { auth, signOut, db, ref, onValue } from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "index.html";
    });
  }

  const lat = document.getElementById("latitude");
  const long = document.getElementById("longitude");
  const speed = document.getElementById("speed");
  const eps = document.getElementById("eps");
  const pastList = document.getElementById("past-locations-list");
  const routeList = document.getElementById("route-list");
  const notificationList = document.getElementById("notification-list");

  const gpsRef = ref(db, 'gpsData');
  const pastRef = ref(db, 'pastLocations');
  const routesRef = ref(db, 'busRoutes');
  const notifyRef = ref(db, 'notifications');

  onValue(gpsRef, (snap) => {
    const data = snap.val();
    if (data) {
      lat.textContent = data.latitude || '--';
      long.textContent = data.longitude || '--';
      speed.textContent = data.speed || '--';
      eps.textContent = data.eps || '--';
    }
  });

  onValue(pastRef, (snap) => {
    pastList.innerHTML = "";
    snap.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.val().timestamp}: ${item.val().latitude}, ${item.val().longitude}`;
      pastList.appendChild(li);
    });
  });

  onValue(routesRef, (snap) => {
    routeList.innerHTML = "";
    snap.forEach(route => {
      const li = document.createElement("li");
      li.textContent = route.val().name;
      routeList.appendChild(li);
    });
  });

  onValue(notifyRef, (snap) => {
    notificationList.innerHTML = "";
    snap.forEach(note => {
      const li = document.createElement("li");
      li.textContent = note.val().message;
      notificationList.appendChild(li);
    });
  });
});

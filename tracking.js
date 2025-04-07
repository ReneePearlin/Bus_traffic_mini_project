import {
  auth,
  signOut,
  db,
  ref,
  onValue
} from './firebase.js';

window.logout = function () {
  signOut(auth).then(() => window.location.href = "logout.html");
};

const latSpan = document.getElementById("latitude");
const longSpan = document.getElementById("longitude");
const speedSpan = document.getElementById("speed");
const epsSpan = document.getElementById("eps");

const gpsRef = ref(db, 'gpsData');
onValue(gpsRef, (snapshot) => {
  const data = snapshot.val();
  latSpan.textContent = data.latitude || '--';
  longSpan.textContent = data.longitude || '--';
  speedSpan.textContent = data.speed || '--';
  epsSpan.textContent = data.eps || '--';
});

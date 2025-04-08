import { db, ref, onValue } from './firebase.js';

const buses = {};
window.showLive = () => alert("Live tracking is on.");
window.showPast = () => alert("Displaying past routes.");
window.showNotifications = () => alert("Notifications panel.");

function fetchBusData() {
  const busesRef = ref(db, 'buses');
  onValue(busesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      window.renderBusesOnMap(data);
    }
  });
}
fetchBusData();

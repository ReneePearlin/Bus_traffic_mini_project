// map.js
import { db, ref, onValue } from './firebase.js';

const map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const fleetMap = L.map('fleet-map').setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(fleetMap);

const gpsRef = ref(db, 'gpsData');
let marker;

onValue(gpsRef, (snap) => {
  const data = snap.val();
  if (!data) return;
  const { latitude, longitude } = data;
  if (marker) {
    marker.setLatLng([latitude, longitude]);
  } else {
    marker = L.marker([latitude, longitude]).addTo(map);
  }
  map.setView([latitude, longitude], 15);
});

const fleetRef = ref(db, 'fleet');
let fleetMarkers = {};

onValue(fleetRef, (snap) => {
  snap.forEach(bus => {
    const data = bus.val();
    const id = bus.key;
    if (fleetMarkers[id]) {
      fleetMarkers[id].setLatLng([data.latitude, data.longitude]);
    } else {
      fleetMarkers[id] = L.marker([data.latitude, data.longitude])
        .addTo(fleetMap)
        .bindPopup(`Bus ${id}`);
    }
  });
});

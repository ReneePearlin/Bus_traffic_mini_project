import { db, ref, onValue } from './firebase.js';

function updateMap(busId, position) {
  const event = new CustomEvent('busLocationUpdate', { detail: { busId, position } });
  window.dispatchEvent(event);
}

const busesRef = ref(db, 'buses');

onValue(busesRef, snapshot => {
  const data = snapshot.val();
  if (!data) return;
  Object.entries(data).forEach(([busId, busInfo]) => {
    const position = {
      lat: busInfo.lat,
      lng: busInfo.lng
    };
    updateMap(busId, position);
  });
});

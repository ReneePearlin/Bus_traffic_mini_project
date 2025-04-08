// tracking.js
import { db, ref, onValue } from "./firebase.js";

const buses = {};

function updateBusLocation(busId, lat, lng) {
  const event = new CustomEvent("updateBus", {
    detail: { busId, lat, lng },
  });
  window.dispatchEvent(event);
}

function initTracking() {
  const busRef = ref(db, "buses");
  onValue(busRef, (snapshot) => {
    const data = snapshot.val();
    for (const busId in data) {
      const { lat, lng } = data[busId];
      updateBusLocation(busId, lat, lng);
    }
  });
}

initTracking();

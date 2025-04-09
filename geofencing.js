function startGeofencing() {
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log(`Current position: ${latitude}, ${longitude}`);

      // Example geofence: trigger alert if outside bounds
      const inZone = latitude > 10 && latitude < 50 && longitude > 10 && longitude < 100;

      if (!inZone) {
        showNotification("You are out of the geofence area!");
      }
    }, err => {
      console.error("Geolocation error:", err);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

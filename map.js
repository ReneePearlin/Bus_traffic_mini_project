let map;
const markers = {};

window.initMap = function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.9716, lng: 77.5946 },
    zoom: 12,
  });
};

function addOrUpdateMarker(busId, lat, lng) {
  if (markers[busId]) {
    markers[busId].setPosition({ lat, lng });
  } else {
    markers[busId] = new google.maps.Marker({
      position: { lat, lng },
      map,
      label: busId,
    });
  }
}

window.addEventListener("updateBus", (e) => {
  const { busId, lat, lng } = e.detail;
  addOrUpdateMarker(busId, lat, lng);
});

window.onload = () => {
  initMap();
};

let map;
const busMarkers = {};
 
window.initMap = function () {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 12.9716, lng: 77.5946 } // default to Bangalore
  });
};

function addOrUpdateMarker(busId, position) {
  if (busMarkers[busId]) {
    busMarkers[busId].setPosition(position);
  } else {
    const marker = new google.maps.Marker({
      position,
      map,
      label: busId,
      title: `Bus ${busId}`
    });
    busMarkers[busId] = marker;
  }
}

window.addEventListener('busLocationUpdate', e => {
  const { busId, position } = e.detail;
  addOrUpdateMarker(busId, position);
});

window.onload = () => {
  if (typeof google !== 'undefined') initMap();
};

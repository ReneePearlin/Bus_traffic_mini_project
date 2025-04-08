let map;
window.renderBusesOnMap = (busData) => {
  for (let busId in busData) {
    const { lat, lng } = busData[busId];
    new google.maps.Marker({
      position: { lat, lng },
      map,
      title: `Bus ${busId}`
    });
  }
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2
  });
}
window.initMap = initMap;
window.onload = initMap;

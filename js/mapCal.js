function calcDistance (lat, lng) {
        toLat = document.getElementById("toLat").value;
        toLng = document.getElementById("toLng").value;
        var disKM = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(lat, lng), new google.maps.LatLng(toLat, toLng));
        document.getElementById("result").innerHTML = (disKM/1000).toFixed(2) + "km";

   }

window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    calcDistance(startPos.coords.latitude, startPos.coords.longitude)
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};

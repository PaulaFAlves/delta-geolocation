var platform = new H.service.Platform({
  'apikey': 'X3Kuj-Si2RCQpwIDIeTSwoB31PXhw3VOxQ3RBe6wIP4'
});

var defaultLayers = platform.createDefaultLayers();

const form = document.getElementById('form');

form.addEventListener("submit", function (event) {
 	event.preventDefault();
  	const input = document.getElementById("endereco").value + ", Brazil"
  	geocodingParams = { searchText: input };
  	geocoder.geocode(geocodingParams, onResult);

})

var map = new H.Map(
    document.getElementById('map-container'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 52.5, lng: 13.4 }
    });

var geocodingParams;

var onResult = function (result) {
  var locations = result.Response.View[0].Result,
    position,
    marker;
  // Add a marker for each location found
  for (i = 0; i < locations.length; i++) {
    position = {
      lat: locations[i].Location.DisplayPosition.Latitude,
      lng: locations[i].Location.DisplayPosition.Longitude
    };
    map.setCenter(position)
    marker = new H.map.Marker(position);
    map.addObject(marker);
  }
};

var geocoder = platform.getGeocodingService();

document.getElementById("form").reset();
















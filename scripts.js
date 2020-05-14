var platform = new H.service.Platform({
  'apikey': 'X3Kuj-Si2RCQpwIDIeTSwoB31PXhw3VOxQ3RBe6wIP4'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

const form = document.getElementById('form');

form.addEventListener("submit", function (event) {
 	event.preventDefault();
  	const input = document.getElementById("endereco").value + ", Brazil"
  	geocodingParams = { searchText: input };
  	geocoder.geocode(geocodingParams, onResult);

})

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('map-container'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 52.5, lng: 13.4 }
    });

var geocodingParams;

// Define a callback function to process the geocoding response:
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

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// var onResult = function (result) {
//   var locations = result.Response.View[0].Result,
//     position,
//     marker;
//   // Add a marker for each location found
//   for (i = 0; i < locations.length; i++) {
//     setNewCenter(
//       locations[i].Location.DisplayPosition.Latitude,
//       locations[i].Location.DisplayPosition.Longitude
//     )
//     map.setCenter(position)
//     marker = new H.map.Marker(position);
//     map.addObject(marker);
//   }
// };


function setNewCenter(lat, long) {
	position = {
		lat: lat,
		long: long
	}
  console.log(lat)
	map.setCenter(position)
  marker = new H.map.Marker(position);
	return position
}

function callback(position) {
 
	setNewCenter(position.coords.latitude, position.coords.longitude);
}


document.getElementById('user-location').addEventListener('click', function() {
	navigator.geolocation.getCurrentPosition(callback);
})












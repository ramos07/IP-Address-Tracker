// Map variable that will hold the Leaflet object data variables to load the map in the div.
let map = null;
// The icon that shows the coordinates retrieved from an IP address (also default.)
var locationIcon = L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [38],
});

// Get the latitude and longitude from the attribute of the map div in the document
let lat = document.getElementById("map").getAttribute("data-lat");
let lng = document.getElementById("map").getAttribute("data-lng");

// If the latitude and longitude data attributes are not empty set
// change the values of the map object. Else if there is no latitude or
// longitude just default to some random coordinates.
if (lat !== "" && lng !== "") {
    map = L.map("map").setView([lat, lng], 10);
    L.marker([lat, lng], { icon: locationIcon }).addTo(map);
} else {
    map = L.map("map").setView([37.776967, -122.452238], 11);
}

// Using open street map as tile layer to view the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

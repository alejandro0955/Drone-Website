var map = L.map('map').setView([25.7994996, -80.1990463], 15.2);

coords = [[25.797673152092322,-80.20078854661462],
[25.799930984900485,-80.19905217367373],
[25.79915251186354,-80.19870740648331],
[25.800665362118014,-80.20198582903953],
[25.801455817813252,-80.1985444256297],
[25.80080151416646,-80.19742236513727],
[25.799966610413314,-80.19660119237464],
[25.798823108345555,-80.19898307751029],
[25.80211223417643,-80.20021811362717],
[25.802100594369204,-80.20205478247793],
[25.80222439953184,-80.19819965843949]]

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.7994996, -80.1990463], {}).addTo(map);

var circle = L.circle([25.7994996, -80.1990463], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


for (let i = 1; i < coords.length; i++) {
    setTimeout(function timer() {
        var con = document.getElementById("terminal");
        var marker = L.marker(coords[i], {}).addTo(map);
        con.innerHTML += ("> Parking found at: " + (coords[i]) + "<br>");
    }, i * 3000);
  }
var map = L.map('map').setView([25.7994996, -80.1990463], 13);

coords = [[25.799528687498434,-80.19929050718713],
    [25.79945799029953,-80.19952622483581],
    [25.799855270876456,-80.19894351492732],
    [25.80008471876335,-80.19926202724784],
    [25.799874665107403,-80.19833197127193],
    [25.799164736083736,-80.19892272780746],
    [25.798884649708405,-80.19918357263415],
    [25.798823108345555,-80.19898307751029],
    [25.798914910992224,-80.19860823880046],
    [25.799814482609975,-80.1981918258509],
    [25.799500589828693,-80.19993727336734]]

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.7994996, -80.1990463], {}).addTo(map);

var circle = L.circle([25.7994996, -80.1990463], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


for (let i = 0; i < coords.length; i++) {
    var con = document.getElementById("terminal");
    var marker = L.marker(coords[i], {}).addTo(map);
    con.innerHTML += ("Parking found at: " + (coords[i]) + "<br>");
}

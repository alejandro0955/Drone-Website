var map = L.map('map').setView([25.801018, -80.199493], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

for (let i =0; 5; i++)  {
    var ter = document.getElementById("terminal").innerHTML;
    ter += "Text"
}

// map.locate({setView: true, watch: true})
// map.on('locationfound', function(e){
    
//     var location = L.marker([e.latitude, e.longitude])
//     var markers = L.marker([])
//     console.log("ran")
//     var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
//         weight: 1,
//         color: 'blue',
//         fillColor: '#cacaca',
//         fillOpacity: 0.2
//     });
    
//     map.removeLayer(location);
//     map.addLayer(location);
//     map.addLayer(circle);
// })
// map.on('locationerror', function(e){
//     console.log(e);
//     alert("Location access denied.");
// });

// console.log(fetch('http://localhost:8000/coords.txt')
//   .then(response => response.text())
//   .then((data) => {
//     console.log(data)
//   }))
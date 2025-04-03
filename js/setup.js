var map = L.map('map', {
  center: [39.95292220841347,-75.20147412081435],
  zoom: 12,
});

var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

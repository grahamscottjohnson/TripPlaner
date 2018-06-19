const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3JhaGFtc2NvdHRqb2huc29uIiwiYSI6ImNqaW00dml2YzAwZWQza21od3c5YzcxbGoifQ.4OPRk3I8YAXy7j_wOJRjew';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const fullstack = buildMarker('activity', [-74.009151, 40.705086]).addTo(map);
const msg = buildMarker('activity', [-73.993324, 40.750298]).addTo(map);

// Activity: http://i.imgur.com/WbMOfMl.png
// Hotel: http://i.imgur.com/D9574Cu.png
// Restaurant: http://i.imgur.com/cqR6pUI.png

// Marker Code //
// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
const mapbox = require('mapbox-gl');

const buildMarker = (type, loc) => {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  switch (type.toLowerCase()) {
    case 'activity':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;

    case 'hotel':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
      break;

    case 'restaurant':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
      break;
  }

  console.log(markerDomEl);
  return new mapbox.Marker(markerDomEl).setLngLat(loc);
};

module.exports = buildMarker;

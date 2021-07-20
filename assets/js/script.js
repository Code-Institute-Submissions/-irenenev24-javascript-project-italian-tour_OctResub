function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 41.87194, lng: 12.56738 }
  });

  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let locations = [
      { lat:41.9028, lng:12.4964, placeName: "Sistine Chapel, Rome",
      text: `<img src="assets/images/sistine-chapel-77.jpg" height='200' width='200'>
      <p>The Colosseum housed gladiators who fought to the death</p>
      <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
      <br>` },//Rome
      { lat:41.902782, lng:12.496366 },//Sistine Chapel, Rome
      { lat:41.9029, lng:12.4545 },//Trevi Fountain, Rome
      { lat:41.8887, lng:12.4802 },//Cloaca Maxima, Rome
      { lat:42.1920, lng:13.7289 },//Abruzzo
      { lat:41.9217, lng:13.8637 },//Lake Scanno, Abruzzo
      { lat:42.0626, lng:14.3049 },//Castle Of Roccascalegna, Abruzzo
      { lat:41.8088, lng:13.7901 },//Parco Nazionale D’Abruzzo, Abruzzo
      { lat:37.500000, lng:15.090278 },//sicily
      { lat:38.1750, lng:12.7335 },//San Vito Lo Capo, Sicily
      { lat:37.5834, lng:12.8252 },//Selinute, Sicily
      { lat:38.1157, lng: 13.3615 }//Palermo, Siciliy
  ];

  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });

  let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
//--info windows----------


function addMarkerInfo() {
for (let i = 0; i < locations.length; i++) {
    let contentString = '<div id="content"><h2>' + locations[i].placeName +
        '</h2><p>' + locations[i].text + '</p></div>';

    const marker = new google.maps.Marker({
        position: locations[i].LatLng[0],
        map: map
    });

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    marker.addListener('click', function () {
        closeOtherInfo();
        infowindow.open(marker.get('map'), marker);
        infoObject[0] = infowindow;
    });
}
}

function closeOtherInfo() {
if (infoObject.length > 0) {
    infoObject[0].set("marker", null);
    infoObject[0].close();
    infoObject.length = 0;
}
}

addMarkerInfo();


 //-------------------------nav
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  //-----------------attractions buttons
  
  
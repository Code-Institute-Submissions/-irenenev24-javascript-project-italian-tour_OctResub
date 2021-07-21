let map;
let infoObject = [];
let centerCords = {
    lat: 41.8719, 
    lng: 12.5674
};
let locations = [
  { lat:41.9028, lng:12.4964 },//Rome
  { lat:41.9027, lng:12.4963 },//Sistine Chapel, Rome
  { lat:41.9029, lng:12.4545 },//Trevi Fountain, Rome
  { lat:41.8887, lng:12.4802 },//Cloaca Maxima, Rome
  { lat:42.1920, lng:13.7289 },//Abruzzo
  { lat:41.9217, lng:13.8637 },//Lake Scanno, Abruzzo
  { lat:42.0626, lng:14.3049 },//Castle Of Roccascalegna, Abruzzo
  { lat:41.8088, lng:13.7901 },//Parco Nazionale D’Abruzzo, Abruzzo
  { lat:37.5000, lng:15.0902 },//sicily
  { lat:38.1750, lng:12.7335 },//San Vito Lo Capo, Sicily
  { lat:37.5834, lng:12.8252 },//Selinute, Sicily
  { lat:38.1157, lng:13.3615 }//Palermo, Siciliy
];
let markersOnMap = [{
    placeName: "Sistine Chapel, Rome",
    text: `<img src="assets/images/sistine-chapel-77.jpg" height="100" width="100">
    <p>The Sistine Chapel famous for its ceiling painted by Michelangelo</p>
    <a href="https://en.wikipedia.org/wiki/Sistine_Chapel" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 41.9029,
      lng: 12.4545
    }]
},
{
    placeName: "Trevi Fountain, Rome",
    text: `<img src="assets/images/trevi-fountain-small-close-up.jpg" height="100" width="100">
    <p>Majella National Park is home to bears.</p>
    <a href="https://en.wikipedia.org/wiki/Trevi-Fountain" target="_blank">Click here for more info</a>`,
    LatLng: [{
        lat: 41.9009,
        lng: 12.4833
    }]
},
{
  placeName: "Cloaca Maxima, Rome",
  text: `<img src="assets/images/rome2.jpg" height="100" width="100">
  <p>The oldest surviving sewerage system still stands in Rome, Italy</p>
  <a href="https://en.wikipedia.org/wiki/Cloaca_Maxima" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 41.8887,
      lng: 12.4802
  }]
},
{
  placeName: "Parco Nazionale d’Abruzzo, Abruzzo",
  text: `<img src="assets/images/abruzzo-mountain-small.jpg" height="100" width="100">
  <p>Abruzzo contains many lakes, mountains and wildlife reserves.</p>
  <a href="https://en.wikipedia.org/wiki/Abruzzo,_Lazio_and_Molise_National_Park" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 41.8088, 
      lng: 13.7901
  }]
},
{
  placeName: "Lake Scanno, Abruzzo",
  text: `<img src="assets/images/abruzzo-small-5.jpg" height="100" width="100">
  <p>This heart shaped lake is the largest in Italy.</p>
  <a href="https://en.wikipedia.org/wiki/Lago_di_Scanno" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 41.9217, 
      lng: 13.8637
  }]
},
{
  placeName: "Castle of Roccascalegna, Abruzzo",
  text: `<img src="assets/images/sicily-beach-small.jpg" height="100" width="100">
  <p>Located high in the hills, this castle was principally constructed in the 15th and 16th centuries.</p>
  <a href="https://en.wikipedia.org/wiki/Castello_di_Roccascalegna" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 42.0626, 
      lng: 14.3049
  }]
},
{
    placeName: "Favignana Beach, Sicily",
    text: `<img src="assets/images/island-favignana-sicily.jpg" height="100" width="100">
    <p>Located in Sicily</p>
    <a href="https://en.wikipedia.org/wiki/Favignana" target="_blank">Click here for more info</a>`,
    LatLng: [{
        lat: 37.56, 
        lng: 12.37
    }]
},
{
  placeName: "Palermo, Sicily",
  text: `<img src="assets/images/palermo1.jpg" height="100" width="100">
  <p>Palermo is the capital city of Sicily.</p>
  <a href="https://en.wikipedia.org/wiki/Palermo" target="_blank">Click here for more info</a>`,
    LatLng: [{
        lat: 38.1157, 
        lng:13.3615
  }]
},
{
  placeName: "San Vito Lo Capo, Sicily",
  text: `<img src="assets/images/sicily-beach-small.jpg" height="100" width="100">
  <p>San Vito Lo Capo is a small seaside town in northwestern Sicily, Italy</p>
  <a href="https://en.wikipedia.org/wiki/San_Vito_Lo_Capo" target="_blank">Click here for more info</a>`,
    LatLng: [{
      lat: 38.1750,
      lng: 12.7335
  }]
},

];
window.onload = function () {
  initMap();
};
function addMarkerInfo() {
  for (let i = 0; i < markersOnMap.length; i++) {
      let contentString = '<div id="content" class="text-center">' + '<h2 style="font-family: Dancing Script, cursive">' + markersOnMap[i].placeName + '</h2>' + 
      '<p style="font-family: Roboto, sans-serif">' + markersOnMap[i].text + '</p></div>';

      const marker = new google.maps.Marker({
          position: markersOnMap[i].LatLng[0],
          map: map
      });

      const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 250,
          maxHeight: 120
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

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: centerCords
  });
  addMarkerInfo();
}
//-------------------------nav
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//--------------back to top btn--w3schools
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














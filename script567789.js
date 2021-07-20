let map;
let infoObject = [];
let centerCords = {

    lat: 41.87194,
    lng: 12.56738
};
let markersOnMap = [{
    placeName: "Sistine Chapel, Rome",
    text: `<img src="assets/images/sistine-chapel-77.jpg" height='200' width='200'>
    <p>The Colosseum housed gladiators who fought to the death</p>
    <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
    <br>`,
    LatLng: [{
        lat:41.902782,
        lng:12.496366
    }]
},
              
{
    placeName: "Trevi Fountain, Rome",
    text: `<img src="assets/images/trevi-fountain-small-close-up.jpg" height="200" width="200">
    <p>Majella National Park is home to bears.</p>
    <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
                <br>`,
    LatLng: [{
        lat:41.9029,
        lng:12.4545
    }]
},
{
    placeName: "Sicily",
    text:  `<img src="assets/images/island-favignana-sicily.jpg" height="200" width="200">
    <h3>Favignana Beach, Sicily</h3>
    <p>Located in Sicily</p>
    <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
                <br>`,
    LatLng: [{
        lat: 37.500000, 
        lng:15.090278
    }]
},
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: centerCords
  });
  addMarkerInfo();
}

window.onload = function () {
  initMap();
};

function addMarkerInfo() {
  for (let i = 0; i < markersOnMap.length; i++) {
      let contentString = '<div id="content"><h2>' + markersOnMap[i].placeName +
          '</h2><p>' + markersOnMap[i].text + '</p></div>';

      const marker = new google.maps.Marker({
          position: markersOnMap[i].LatLng[0],
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

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
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


let map;
let infoObject = [];
let centerCords = {

    lat: 41.87194,
    lng: 12.56738
};
let markersOnMap = [{
    placeName: "Rome",
    text: `<img src="https://images.unsplash.com/photo-1514896856000-91cb6de818e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height='200' width='200'>
    <h3>Colosseum, Rome</h3>
    <p>The Colosseum housed gladiators who fought to the death</p>
    <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
    <br>`,
    LatLng: [{
        lat:41.902782,
        lng:12.496366
    }]
},
              
{
    placeName: "Abruzzo",
    text: `<img src="assets/images/abruzzo-mountain-small.jpg" height="200" width="200">
    <h3>Majella National Park, Abruzzo</h3>
    <p>Majella National Park is home to bears.</p>
    <a href="https://en.wikipedia.org/wiki/Colosseum" target="_blank">Click here for more info</a>
                <br>`,
    LatLng: [{
        lat:42.332668,
        lng:13.522123
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
        zoom: 6,
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
//Get the button
let mybutton = document.getElementById("myBtn");

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
//-----------------attractions buttons


  // Close the dropdown if the user clicks outside of it
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
  }
}
}
}
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
    text: "fjoer",
    LatLng: [{
        lat:42.332668,
        lng:13.522123
    }]
},
{
    placeName: "Sicily",
    text: "hdyfgr",
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
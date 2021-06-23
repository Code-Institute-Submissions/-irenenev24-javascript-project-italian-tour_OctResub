let map;
let infoObject = [];
let centerCords = {

    lat: 41.87194,
    lng: 12.56738
};
let markersOnMap = [{
    placeName: "Rome",
    text: "nbjfuy",
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
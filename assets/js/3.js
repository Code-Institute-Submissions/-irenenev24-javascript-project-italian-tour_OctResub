let locations = [
    { lat:41.9028, lng:12.4964,},//Rome
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
    { lat:38.1157, lng: 13.361 }//Palermo, Siciliy
  ];
  
  function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 41.87194, lng: 12.56738 },
  })
  };
  
  let markerInfo = [{
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
        lat:44.9029,
        lng:12.4545
    }]
  },
  ];
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  const marker = new google.maps.Marker({
    position: { lat:41.902782, lng:12.496366 }, 
    map,
    title: "Colosseum",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
  
  let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
  
  //--info windows----------
// let markers = addMarkerInfo

// function addMarkerInfo() {
// for (let i = 0; i < locations.length; i++) {
//     let contentString = '<div id="content"><h2>' + locations[i].placeName +
//         '</h2><p>' + locations[i].text + '</p></div>';

//     const marker = new google.maps.Marker({
//         position: locations[i].LatLng[0],
//         map: map
//     });

//     const infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         maxWidth: 200
//     });

//     marker.addListener('click', function () {
//         closeOtherInfo();
//         infowindow.open(marker.get('map'), marker);
//         infoObject[0] = infowindow;
//     });
// }
// }

// function closeOtherInfo() {
// if (infoObject.length > 0) {
//     infoObject[0].set("marker", null);
//     infoObject[0].close();
//     infoObject.length = 0;
// }
// }

// addMarkerInfo();
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
  
  function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 41.87194, lng: 12.56738 }
  });
  
  const contentString = [{
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
        lat:44.9029,
        lng:12.4545
    }]
  },
  ];
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: { lat:41.902782, lng:12.496366 }, 
    map,
    title: "Colosseum",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
  
  let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  
  
  
  
  
  
  
  
  
  
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
  // new map
  function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 41.87194,
                lng: 12.56738 }
  });
  // marker information
  const contentString = [{
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
        lat:44.9029,
        lng:12.4545
    }]
  },
  ];
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: { lat:41.902782, lng:12.496366 }, 
    map,
  
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
  
  let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  
  
  
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
  
  const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: markersOnmap[i].LatLng[0], 
      map: map
   
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
  
    let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  //--info windows----------
  // let markers = addMarkerInfo
  
  // function addMarkerInfo() {
  // for (let i = 0; i < locations.length; i++) {
  //     let contentString = '<div id="content"><h2>' + locations[i].placeName +
  //         '</h2><p>' + locations[i].text + '</p></div>';
  
  //     const marker = new google.maps.Marker({
  //         position: locations[i].LatLng[0],
  //         map: map
  //     });
  
  //     const infowindow = new google.maps.InfoWindow({
  //         content: contentString,
  //         maxWidth: 200
  //     });
  
  //     marker.addListener('click', function () {
  //         closeOtherInfo();
  //         infowindow.open(marker.get('map'), marker);
  //         infoObject[0] = infowindow;
  //     });
  // }
  // }
  
  // function closeOtherInfo() {
  // if (infoObject.length > 0) {
  //     infoObject[0].set("marker", null);
  //     infoObject[0].close();
  //     infoObject.length = 0;
  // }
  // }
  
  // addMarkerInfo();
  
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
  
  function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 41.87194, lng: 12.56738 }
  });
  
  const contentString = [{
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
        lat:44.9029,
        lng:12.4545
    }]
  },
  ];
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: { lat:41.902782, lng:12.496366 }, 
    map,
    title: "Colosseum",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
  
  let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }
  //--info windows----------
  // let markers = addMarkerInfo
  
  // function addMarkerInfo() {
  // for (let i = 0; i < locations.length; i++) {
  //     let contentString = '<div id="content"><h2>' + locations[i].placeName +
  //         '</h2><p>' + locations[i].text + '</p></div>';
  
  //     const marker = new google.maps.Marker({
  //         position: locations[i].LatLng[0],
  //         map: map
  //     });
  
  //     const infowindow = new google.maps.InfoWindow({
  //         content: contentString,
  //         maxWidth: 200
  //     });
  
  //     marker.addListener('click', function () {
  //         closeOtherInfo();
  //         infowindow.open(marker.get('map'), marker);
  //         infoObject[0] = infowindow;
  //     });
  // }
  // }
  
  // function closeOtherInfo() {
  // if (infoObject.length > 0) {
  //     infoObject[0].set("marker", null);
  //     infoObject[0].close();
  //     infoObject.length = 0;
  // }
  // }
  
  // addMarkerInfo();
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
  function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {
        let contentString = '<div id="content" class="text-center"><h2 style="font-family: Dancing Script, cursive">' + markersOnMap[i].placeName + '</h2>' +
        '<img height="100" width="80">' + markersOnMap[i].image + '</img>' + 
            '<p style="font-family: Roboto, sans-serif">' + markersOnMap[i].text + '</p></div>';
  
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });
  
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400,
            maxHeight: 150
        });
  
        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            infoObject[0] = infowindow;
        });
    }
  }
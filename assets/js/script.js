//LIST OF PLACES WITH COORDINATIONS ETC
const places = [
  //-------Rome Attractions
  {
      name: "Trevi Fountain, Rome",
      imageLink: "assets/images/trevi-fountain-small-close-up.jpg",
      coordinates: {
          lat: 41.9009,
          lng: 12.4833
      }, //Trevi Fountain, Rome
      description: "Majella National Park is home to bears.",
      link: `<a href="#treviFountain">Click here for more info</a>`,
  },
  {
      name: "Cloaca Maxima, Rome",
      imageLink: "assets/images/rome2.jpg",
      coordinates: {
          lat: 41.8887,
          lng: 12.4802
      }, //Cloaca Maxima, Rome
      description: "The oldest surviving sewerage system still stands in Rome, Italy",
      link: `<a href="#cloacaMaxima">Click here for more info</a>`,
      mapLink: `<a href="#seeOnMap">See on Map</a>`,
  },
  //-------Rome Hotels
  {
      name: "Hotel Savoy, Rome",
      imageLink: "assets/images/hotel-savoy-roma.jpg",
      coordinates: {
          lat: 41.9074,
          lng: 12.4893
      }, //Hotel Savoy, Rome
      description: "Distinct quality",
      link: `<a href="#hotelSavoy">Click here for more info</a>`
  },
  {
      name: "Marcella Hotel, Rome",
      imageLink: "assets/images/marcalle-hotel-rome.jpg",
      coordinates: {
          lat: 41.9470,
          lng: 12.4753
      }, //Marcella Hotel, Rome
      description: "Distinct quality",
      link: `<a href="#marcellaHotel">Click here for more info</a>`
  },
  {
      name: "Otivm Hotel, Rome",
      imageLink: "assets/images/otivm-hotel-rome.jpg",
      coordinates: {
          lat: 41.9470,
          lng: 12.4753
      }, //Otivm Hotel, Rome
      description: "Distinct quality",
      link: `<a href="#otivmHotel">Click here for more info</a>`
  },
  //-------Abruzzo Attractions
  {
      name: "Parco Nazionale d’Abruzzo, Abruzzo",
      imageLink: "assets/images/abruzzo-mountain-small.jpg",
      coordinates: {
          lat: 41.8088,
          lng: 13.7901
      }, //National Park, Abruzzo
      description: "Distinct quality",
      link: `<a href="#nationalPark">Click here for more info</a>`
  },
  {
      name: "Lake Scanno, Abruzzo",
      imageLink: "assets/images/lake-scanno-small.jpg",
      coordinates: {
          lat: 41.9217,
          lng: 13.8637
      }, //Lake Scanno, Abruzzo
      description: "Distinct quality",
      link: `<a href="#lakeScanno">Click here for more info</a>`
  },
  {
      name: "Castle of Roccascalengo, Abruzzo",
      imageLink: "assets/images/abruzzo-small-5.jpg",
      coordinates: {
          lat: 42.0626,
          lng: 14.3049
      }, //Castle of Roccascalengo, Abruzzo
      description: "Distinct quality",
      link: `<a href="#castle">Click here for more info</a>`
  },
  //-------Abruzzo Hotels
  {
      name: "Sextantio Albergo Diffuso, Abruzzo",
      imageLink: "assets/images/sextantio-3.jpg",
      coordinates: {
          lat: 42.2039,
          lng: 13.3834
      }, //Sextantio Albergo Diffuso, Abruzzo
      description: "Distinct quality",
      link: `<a href="#sextantio">Click here for more info</a>`
  },
  {
      name: "Rifugio della Rocca, Abruzzo",
      imageLink: "assets/images/rocca-1.jpg",
      coordinates: {
          lat: 42.3278,
          lng: 13.6912
      }, //Rifugio della Rocca, Abruzzo
      description: "Distinct quality",
      link: `<a href="#rifugio">Click here for more info</a>`
  },
  {
      name: "G Hotel, Pescara, Abruzzo",
      imageLink: "assets/images/g-hotel-pescara.jpg",
      coordinates: {
          lat: 42.3278,
          lng: 13.6912
      }, //G Hotel Pescara, Abruzzo
      description: "Distinct quality",
      link: `<a href="#hotelPescara">Click here for more info</a>`
  },
  //-------Sicily Attractions
  {
      name: "San Vito Lo Capo, Sicily",
      imageLink: "assets/images/sicily-beach-small.jpg",
      coordinates: {
          lat: 38.1750,
          lng: 12.7335
      }, //San Vito Lo Capo, Sicily
      description: "Distinct quality",
      link: `<a href="#sanVito">Click here for more info</a>`
  },
  {
      name: "Selinunte, Sicily",
      imageLink: "assets/images/selinunte-sicily.jpg",
      coordinates: {
          lat: 37.5834,
          lng: 12.8252
      }, //Selinunte, Sicily
      description: "Distinct quality",
      link: `<a href="#selinute">Click here for more info</a>`
  },
  {
      name: "Palermo, Sicily",
      imageLink: "assets/images/palermo1.jpg",
      coordinates: {
          lat: 38.1157,
          lng: 13.3615
      }, //Palermo, Siciliy
      description: "Distinct quality",
      link: `<a href="#palermo">Click here for more info</a>`
  },
  //-------Sicily Hotels
  {
      name: "Mazzaro Sea Palace, Sicily",
      imageLink: "assets/images/mazzaro-sea-palace.jpg",
      coordinates: {
          lat: 37.518,
          lng: 15.1731
      }, //Mazzaro Sea Palace,Sicily
      description: "Distinct quality",
      link: `<a href="#mazzaro">Click here for more info</a>`
  },
  {
      name: "Hotel Borgo Pantano, Sicily",
      imageLink: "assets/images/hotel-borgo-sicily.jpg",
      coordinates: {
          lat: 37.0755,
          lng: 15.2866
      }, //Hotel Borgo Pantano, Sicily
      description: "Distinct quality",
      link: `<a href="#borgoPantano">Click here for more info</a>`
  },
  {
      name: "Giardini Mon Plaisir, Sicily",
      imageLink: "assets/images/giardini-mon-plasier-sicily.jpg",
      coordinates: {
          lat: 37.3278,
          lng: 15.6912
      }, //Giardini Mon Plaisir, Sicily
      description: "Distinct quality",
      link: `<a href="#giardini">Click here for more info</a>`
  },
];

let map;

const attractions = document.getElementById("attractions");
//INITALIZE MAP
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      center: {
          lat: 42.2719,
          lng: 13.5674
      },
      zoom: 6
  });
  //TO CREATE MARKERS AND INFOWINDOWS
  for (let i = 0; i < places.length; i++) {
      let place = places[i];
      const marker = new google.maps.Marker({
          position: place.coordinates,
          animation: google.maps.Animation.DROP,
          map: map,
          title: place.name,
      });
       //infoWindow content
      let infoWindowContentString=` <div class="info-window">
      <img src = "${place.imageLink}"
      height = "200" width = "100%">
          <h3 style = "font-family: Dancing Script, cursive">${place.name}><h3><p>${place.description}</p><p>${place.link}</p><a href="#attraction-${i}">Attractions</a></div>`;

      const infowindow = new google.maps.InfoWindow({
          content: infoWindowContentString
          });
            //event listener to open infoWindow
                    marker.addListener("click", () => {
      infowindow.open({
          anchor: marker,
          map,// shouldFocus: false
          });
      });
    }
  }

  //NAV BAR
  function myFunction() {
    let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
        } 
      else {
        x.className = "topnav";
      }
    }

  //BACKTOTOPBTN

  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    { 
      mybutton.style.display = "block";
    } 
    else {
  mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
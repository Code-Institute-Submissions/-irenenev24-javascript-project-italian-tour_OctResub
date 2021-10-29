const places = [
  {
    name: "Sistine Chapel, Rome",
    imageLink: "assets/images/sistine-chapel-77.jpg",
    coordinates: { lat:41.9028, lng:12.4964 },//Sistine Chapel, Rome,
    description: "The Sistine Chapel famous for its ceiling painted by Michelangelo",
    link: `<a href="#sistineChapel">Click here for more info</a>`,
  },
  {
    name: "Trevi Fountain, Rome",
    imageLink: "assets/images/trevi-fountain-small-close-up.jpg",
    coordinates: { lat: 41.9009, lng: 12.4833 },//Trevi Fountain, Rome
    description: "Majella National Park is home to bears.",
    link: `<a href="#treviFountain">Click here for more info</a>`,
  },
  {
    name: "Cloaca Maxima, Rome",
    imageLink: "assets/images/rome2.jpg",
    coordinates: { lat:41.8887, lng:12.4802 },//Cloaca Maxima, Rome
    description: "The oldest surviving sewerage system still stands in Rome, Italy",
    link: `<a href="#cloacaMaxima">Click here for more info</a>`,
  },    
];

let map;
const attractions = document.getElementById("attractions");

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8719, 
      lng: 12.5674 },
    zoom: 5
  });

  for (let i = 0; i < places.length; i++) {
    
    let place = places[i]
    const marker = new google.maps.Marker({
      position: place.coordinates,
      map: map,
      title: place.name
    });

    let infoWindowContentString = `
      <div class="info-window">
        <img src="${place.imageLink}" height="180" width="200">
        <h3>${place.name}</h3>
        <br>
        <a href="#attractions-${i}">Attractions</a>
        <br>
        <p>${place.description}</p>
        <p>${place.link}</p>
      </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      content: infoWindowContentString
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        // shouldFocus: false
      });
    });
  }
}

/*
function showAttractions() {
  
  for (let i = 0; i < places.length; i++) {
    
    let place = places[i]
    
    let listingHTML = `
      <div class="listing" id="listing-${i}">

        <h3>${place.name}</h3>  
        <img src="${place.imageLink}">

        <div class="description">
          ${place.description}
        </div>
        
        <br>
        <a onclick="goToPlaceOnMap(${i})">See on Map</a>
      </div>
    `
    
    attractions.innerHTML += listingHTML
    
  }
  
}

function goToPlaceOnMap(placeId) {
  let place = places[placeId]
  location.href = "#map"
  
  map.setCenter(place.coordinates)
  map.setZoom(18)
}

showAttractions()*/
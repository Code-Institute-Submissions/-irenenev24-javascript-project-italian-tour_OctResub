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
}

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
let markers = addMarkerInfo;

function addMarkerInfo() {
for (let i = 0; i < locations.length; i++) {
let contentString = '<div id="content"><h2>' + locations[i].placeName +
'</h2><p>' + locations[i].text + '</p></div>';

  const marker = new google.maps.Marker({
       position: locations[i].LatLng[0],
       map: map
  })
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



<section class="form-container container-fluid pt-2 pb-2" id="contact-form">
    <header class="text-center mb-2 mt-2">
        <h1 class="header-two pb-2">Contact Us</h1>
        <p>Should you have any further questions please contact us through the following form.</p>
    </header>
    <form class="shadow p-3 mb-3 bg-white rounded text-center pb-4" onsubmit="return sendMail(this);">
        <div class="row">
            <div class=" col-md-6 col-sm-12 form-group mb-3">
                <label for="firstname" class="header-minor form-label mb-2">First Name</label>
                <input name="firstname" type="text" id="firstname" class="form-control form-input" required>
            </div>
            <div class=" col-md-6 col-sm-12 form-group mb-3">
                <label for="lastname" class="header-minor form-label mb-2">Last Name</label>
                <input name="lastname" type="text" id="lastname" class="form-control form-input" required>
            </div>
            <div class="col-12 col-lg-6 form-group mb-3">
                <label for="email" class="header-minor form-label mb-2">Email Address</label>
                <input name="email" type="email" id="email" class="form-control form-input" required>
            </div>
            <div class="form-group col-12 col-lg-6 mb-3">
                <label for="number" class="header-minor form-label mb-2">Phone Number</label>
                <input name="phone" type="tel" id="number" class="form-control form-input">
            </div>
            <div class="form-group col-12 mb-3">
                <label for="message" class="header-minor form-label mb-2">How can we help?</label>
                <textarea name="message" class="form-control form-input" id="message" rows="3" required></textarea>
            </div>
            <div>
              <p class="text-center col-md-6 col-sm-12 form-group mb-3"><input type="checkbox" id="legal" name="legal" value="legal" required> Please tick to indicate you have read our</p>
            </div>
          </div>
          <div>
          </div>
            <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Terms and Conditions</button>
            <div id="id01" class="modal">
            <form class="modal-content animate" action="/action_page.php" method="post">
            <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <div class="container">
            <h1>Terms and Conditions</h1>
            </header>
            <p>Do not copy any of the information given here without the express written consent of the company.</p>
            <p>Do not copy any of the information from linked sites without appropiate consent from the site operators.</p>
            <button class="text-center"><a href="#contact-form">I agree</a></button>
         </div>
          <div>
         </div>
         </div>
        </div>
          <br>
        <button type="submit" id="submit-button"class="btn form-btn red-btn hvr-grow" value="send">Send Message</button>
    </form>
</section>
</main>
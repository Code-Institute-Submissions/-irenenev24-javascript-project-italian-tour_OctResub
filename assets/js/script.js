////array of Markers
    const locations = [
             {
                name: 'Rome',
                description: 'Rome Capital',
                location: {lat:41.902782, lng:12.496366},
             },
             {
               name: 'Abruzzo',
               description: 'Abruzzo full of nature',
               location: {lat:42.332668,lng:13.522123},
             },
             {
               name: 'Sicily',
               description: 'Sicily island',
               location: {lat: 37.500000, lng:15.090278},
             },
             ]
             let map
 //Map options

    function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
            zoom: 6,
            mapTypeControl: false,
            center: {
            lat: 41.87194,
            lng: 12.56738
            }
        });
           for(let i = 0; i <locations.length; i++){
              //add markers
              addLocation(locations[i]);
            }

    }
//function for the plotting markers on the map
    function addLocation (props){
        console.log(props.location)
              let location = new google.maps.Marker({
                position: props.location,
                map:map,
              });
              let infoWindow = new google.maps.InfoWindow({
                content: `<img src="https://images.unsplash.com/photo-1514896856000-91cb6de818e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height='200' width='200'>
                <h3>Colosseum, Rome</h3>
                <p>The Colosseum housed gladiators who fought to the death</p>
                <a href="https://en.wikipedia.org/wiki/Colosseum">Click here for more info</a>`,
              });
              location.addListener("click", () => {
                infoWindow.open(map, location);
              });
            }
 //nav
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
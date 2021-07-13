let map;
function initMap(){
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: {
                lat: 41.87194,
                lng: 12.56738
            },
            zoom: 5.8,
          mapTypeControl: true, 
          mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
              mapTypeIds: ['roadmap', 'terrain'],
          },
        });
    }
    let marker = new google.maps.Marker({
        position: {
            lat:41.902782,
        lng:12.496366
        },
        map: map,
        title: 'Rome'
    });

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    mapTypeControl: false,
    center: {
      lat: 41.87194,
      lng: 12.56738
    }
  });
}
const places = [
  {
    name: 'Rome',
    description: 'jiudfkjvuldfhjuhdf',
    image_location: 'assets/images/abruzzo-mountain-small.jpg',
    location: ['41.902782', '12.496366'],
  },
  {
    name: 'Dog',
    description: 'A dog is (allegedly) man\'s best friend.',
    nutrition: 'Carnivore',
    weight: 25,
    image_location: 'images/dog.jpg'
  },
  {
    name: 'Cow',
    description: 'A cow is a large herbivore that lives on a farm.',
    nutrition: 'Herbivore',
    weight: 750,
    image_location: 'images/cow.jpg'
  },
  {
    name: 'Pig',
    description: 'A pig is an intelligent animal that also lives on a farm.',
    nutrition: 'Omnivore',
    weight: 300,
    image_location: 'images/pig.jpg'
  },
]

/*
Add the animals above to the HTML page, respecting the filters, if any values
have been selected.
*/
function showPlaces() {
  // Div containing articles about the animals.
  var places_container = document.getElementById('animals')
  // Remove all current animal divs so we can replace with new ones below.
  // If we don't do this the divs we add below will just be added after whatever
  // is already on the page.
  while (places_container.firstChild) {
    places_container.removeChild(places_container.firstChild);
  }

  var selected_nutrition = document.getElementById('nutrition-selector').value
  var selected_min_weight = document.getElementById('min-weight-selector').value


  for (i = 0; i < places.length; i++){
    var current_place = places[i];

    // The following two variables are boolean values
    // nutrition_correct is equal to true either if the selected option is all
    // or the current animal's nutrition value is the same as that selected.
    var nutrition_correct = (selected_nutrition == 'all' ||
                             current_animal.nutrition == selected_nutrition)

    // I decided to shorten the code required here by setting the default
    // value in the select menu to 0 intead of 'all' like in nutrition,
    // because a minimum weight of 0 would include all animals. This means
    // we only have to check whether the selected min. weight is less than/equal
    // to the animal's weight (which is more elegant than
    // (selected_min_weight == 'all' || selected_min_weight <= current_animal.weight)
    var min_weight_correct = (selected_min_weight <= current_animal.weight)

    // Only show animals with the correct nutrition and weight
    if (nutrition_correct && min_weight_correct){
      var animal_div = generate_animal_html(current_animal)
      animals_container.appendChild(animal_div)
    }
  }
}


/* Generate a div for a single animal, e.g.
<div class="animal">
  <h3>Cat</h3>
  <img src="images/cat.jpg">
  A cat is a small animal that likes to purr.
  <br>
  <br>
  Nutrition: Carnivore
  <br>
  Weight: 4kg
</div>
*/
function generate_place_html(place){
  var place_div = document.createElement('div')
  place_div.setAttribute('class', 'place') // Give div class="animal"
  var header = document.createElement('h3')
  header.innerHTML = place.name
  var image = document.createElement('img')
  image.setAttribute('src', place.image_location)
  var description = document.createTextNode(place.description)
  var nutrition = document.createTextNode('Nutrition: ' + place.nutrition)
  // image.setAttribute('onclick', 'changeFilter(\"' + animal.nutrition + '\")')
  var weight = document.createTextNode('Weight: ' + place.weight + 'kg')
  place_div.appendChild(header)
  place_div.appendChild(image)
  place_div.appendChild(description)
  place_div.appendChild(document.createElement('br'))
  place_div.appendChild(document.createElement('br'))
  place_div.appendChild(nutrition)
  place_div.appendChild(document.createElement('br'))
  place_div.appendChild(weight)

  return place_div
}

showPlace()

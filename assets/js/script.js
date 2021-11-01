// Chosen betwween beach, restaurant, activies

function chooseCategory(chosen) {
    const choices = document.getElementsByClassName("choices");
  
    for (i = 0; i < choices.length; i++) {
      choices[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "flex";
  }
  
  function choosePlace(chosen) {
    const choices = document.getElementsByClassName("info");
    for (i = 0; i < choices.length; i++) {
      choices[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "block";
  }
function changeCards(evt, typeName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  
  // * Get all elements with the class "LO-info" and set their display to none (hide them)
  tabcontent = document.getElementsByClassName("LO-info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //  * Get all elements with class="LO" and remove the class "active"
  tablinks = document.getElementsByClassName("LO");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // ? Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(typeName).style.display = "flex";
  evt.currentTarget.className += " active";
}
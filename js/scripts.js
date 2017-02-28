//business logic
function Place(location, state, country, landmarks, time) {
  this.locate = location;
  this.state = state;
  this.country = country;
  this.landmarks = landmarks;
  this.time = time;
  console.log(Place);
}
//user interface
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

  var inputtedLocation = $("input#newLocation").val();
  var inputtedState = $("input#newState").val();
  var inputtedCountry = $("input#newCountry").val();
  var inputtedLandmarks = $("input#newLandmarks").val();
  var inputtedTime = $("input#newTime").val();

  var newPlace = new Place(inputtedLocation, inputtedState, inputtedCountry, inputtedLandmarks, inputtedTime);

  $("ul#visited").append("<li><span class='place'>" + newPlace.locate + "</span></li>");

  $(".place").last().click(function() {
    $("#showPlace").toggle();
    $("#showPlace h2").text(newPlace.locate);
    $(".state").text(newPlace.state);
    $(".country").text(newPlace.country);
    $(".landmarks").text(newPlace.landmarks);
    $(".time").text(newPlace.time);



  })
  });
});

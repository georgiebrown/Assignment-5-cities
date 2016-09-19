// Wait for the submit button the be clicked
// Once clicked read input
// if input ==
//- "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//- "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//- "Austin" or "ATX" make the background of the page austin.jpg
//- "Sydney" or "SYD" make the background of the page sydney.jpg
// else if return alert('error')


$(document).ready(start);

var cityName = 'default';

function start(){
  $('#submitBtn').click(changeBackgroundImage);
}

function changeBackgroundImage(e) {
  event.preventDefault();
  var cityName = getCityName();
}

function getCityName() {
  var cityName = $('#cityType').val();
  if(isNewYork(cityName)) {
    changeToNewYork();
  } else if(isAustin(cityName)) {

  }
}

function isNewYork(cityName) {
  var result = ['New York City', 'NYC', 'New York'].includes(cityName)
  return result
}

function changeToNewYork() {
  $('body').css('background', 'url(images/nyc.jpg)');
}

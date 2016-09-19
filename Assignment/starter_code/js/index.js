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
    changeToAustin();
  } else if(isSydney(cityName)) {
    changeToSydney();
  } else if(isLa(cityName)) {
    changeToLa();
  } else alert('This is not valid');
  }


}

function isNewYork(cityName) {
  var result = ['nyc', 'New York City', 'NYC', 'New York'].includes(cityName)
  return result
}

function changeToNewYork() {
  $('body').css('background', 'url(images/nyc.jpg)');
}

function isAustin(cityName) {
  var result = ['austin', 'Austin', 'ATX'].includes(cityName)
  return result
}

function changeToAustin() {
  $('body').css('background', 'url(images/austin.jpg)');
}

function isSydney(cityName) {
  var result = ['Sydney', 'sydney', 'SYD'].includes(cityName)
  return result
}

function changeToSydney(){
  $('body').css('background', 'url(images/sydney.jpg)');
}

function isLa(cityName) {
  var result= ['LAX', 'LA', 'Los Angeles'].includes(cityName)
  return result
}

function changeToLa (){
  $('body').css('background', 'url(images/la.jpg)');
}

function isNotValid(cityName) {
  var result===
}

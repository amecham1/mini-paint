$(document).ready(function() {
// this watches the clicks on each div class box

var boxes = $('.box');
var reset = $('#reset');

boxes.on('click',function() {
  // this function says that when a box div is clicked it will turn it white.
  $(this).addClass(color);
});
// this will remove the white class on the div when double clicked
boxes.on('dblclick', function() {
  $(this).removeClass(colors);
});

reset.on('click', function(){
  boxes.removeClass(colors);
});

var color = 'white';
var colors = 'white, red, blue, green, yellow';

$('#red').on('click', function() {
  color = 'red';
});

$('#blue').on('click', function() {
  color = 'blue';
});

$('#green').on('click', function() {
  color = 'green';
});

$('#yellow').on('click', function() {
  color = 'yellow';
});

$('#white').on('click', function() {
  color = 'white';
});








});

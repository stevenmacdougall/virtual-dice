//Die 1
var cubeOne = document.getElementById('cube-1');

var min = 1;
var max = 24;

cubeOne.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  cubeOne.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cubeOne.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}

//Die 2
var cubeTwo = document.getElementById('cube-2');

var min = 1;
var max = 24;

cubeTwo.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  cubeTwo.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cubeTwo.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
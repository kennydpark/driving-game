var $imgElement = document.querySelector('img');
var imageStyle = $imgElement.style;
window.addEventListener('keydown', keyPress);
function keyPress(event) {
  if (event.key === 'ArrowDown') {
    $imgElement.className = 'S';
    data.carDirection = 'S';
  } else if (event.key === 'ArrowLeft') {
    $imgElement.className = 'W';
    data.carDirection = 'W';
  } else if (event.key === 'ArrowUp') {
    $imgElement.className = 'N';
    data.carDirection = 'N';
  } else if (event.key === 'ArrowRight') {
    $imgElement.className = 'E';
    data.carDirection = 'E';
  }
  if (event.key === ' ') {
    setInterval(moveCar, 16);
    var intervalID = setInterval(moveCar, 16);
    // console.log(intervalID);
    if (intervalID) {
      clearInterval(intervalID);
    }
  }
}

var leftValue = 5;
function moveCar() {
  imageStyle.left = leftValue + 'px';
  leftValue += 5;
}

var data = {
  carDirection: null,
  location: {
    x: '',
    y: ''
  }
};

// clearInterval(intervalID);
// intervalID = false;

var $imgElement = document.querySelector('img');
var imageStyle = $imgElement.style;
var intervalID;
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
    if (!intervalID) {
      intervalID = setInterval(moveCar, 16);
    } else {
      clearInterval(intervalID);
      intervalID = undefined;
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

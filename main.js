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

var data = {
  carDirection: null,
  location: {
    x: imageStyle.left,
    y: imageStyle.top
  }
};

data.location.x = 5;
data.location.y = 5;
function moveCar() {
  if ($imgElement.className === 'E') {
    imageStyle.left = data.location.x + 'px';
    data.location.x += 5;
  } else if ($imgElement.className === 'S') {
    imageStyle.top = data.location.y + 'px';
    data.location.y += 5;
  } else if ($imgElement.className === 'W') {
    imageStyle.left = data.location.x + 'px';
    data.location.x -= 5;
  } else if ($imgElement.className === 'N') {
    imageStyle.top = data.location.y + 'px';
    data.location.y -= 5;
  }
}

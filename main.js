var $imgElement = document.querySelector('img');
window.addEventListener('keydown', arrowKey);
function arrowKey(event) {
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
}

window.addEventListener('keydown', spaceBar);
function spaceBar(event) {

}

var data = {
  carDirection: null,
  location: {
    x: '',
    y: ''
  }
};

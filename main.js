var $imgElement = document.querySelector('img');
window.addEventListener('keydown', keyPress);
function keyPress(event) {
  if (event.key === 'ArrowDown') {
    $imgElement.className = 'turn-down';
  } else if (event.key === 'ArrowLeft') {
    $imgElement.className = 'turn-left';
  } else if (event.key === 'ArrowUp') {
    $imgElement.className = 'turn-up';
  } else if (event.key === 'ArrowRight') {
    $imgElement.className = 'turn-right';
  }
}

// Your code here
// Get a reference to the dodger element
const dodger = document.getElementById("dodger");

// Function that will move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Assuming the game field width is 400px and dodger width is 40px
  if (left < 360) { // 400 - 40 = 360
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for keydown events
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
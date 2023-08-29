/*var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/Gpay_Card ${num}.jpg`, // Background (image path or hex color).
  fg: `Images/front.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
*/

/*const cardContainer = document.getElementById("card");

// Create an array of image URLs
const imageUrls = [
  "Images/Gpay_Card1.jpg",
  "Images/Gpay_Card2.jpg",
  "Images/Gpay_Card3.jpg",
  "Images/Gpay_Card4.jpg",
];

let shuffledImages = shuffleArray(imageUrls);
let currentImageIndex = 0;
let scratched = false;

// Function to shuffle an array randomly
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to start scratch card
function startScratchCard() {
  if (!scratched) {
    cardContainer.innerHTML = ""; // Clear previous content
    const scratchPad = $("<div>")
      .addClass("scratch-pad")
      .wScratchPad({
        size: 30,
        bg: shuffledImages[currentImageIndex],
        fg: "Images/front.jpg",
        scratchUp: function () {
          scratched = true;
        },
      });

    $(cardContainer).append(scratchPad);
  }
}

// Initialize the scratch card
startScratchCard();
*/

// This code should come before the scratch card initialization
let isRevealed = false; // Flag to track whether the scratch card has been revealed

// The following code initializes the scratch card with the shuffling images and reveal logic
$(document).ready(function () {
  const numImages = 4; // Number of available images
  const randomImageIndex = Math.floor(Math.random() * numImages) + 1;

  $("#card").wScratchPad({
    size: 100, // The size of the brush/scratch.
    bg: `Images/Gpay_Card ${randomImageIndex}.jpg`, // Background image path.
    fg: `Images/front.jpg`, // Foreground image path.
    cursor: "pointer", // Set cursor.
    scratchUp: function () {
      if (!isRevealed) {
        isRevealed = true;
        // Add any action you want to perform when the scratch card is revealed
        alert("Scratch card revealed!");
      }
    },
  });
});


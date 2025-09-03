// Function to generate a random integer within a specified range (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}

// Get the div element to display the number
const randomNumberDisplay = document.getElementById('randomNumberDisplay');

// Generate a random number (e.g., between 1 and 100) on page load
const randomNumber = getRandomInt(1000000, 100000000);

// Display the random number in the div
randomNumberDisplay.textContent = "You are order #" + randomNumber;
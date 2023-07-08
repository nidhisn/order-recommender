// Array of lunch options for Indians
const lunchOptions = ["Biryani", "Butter Chicken", "Dosa", "Chole Bhature", "Paneer Tikka"];

// Function to generate a random lunch suggestion
function generateLunchSuggestion() {
  const randomIndex = Math.floor(Math.random() * lunchOptions.length);
  return lunchOptions[randomIndex];
}

// Function to handle button click event
function handleClick() {
  const suggestion = generateLunchSuggestion();
  const suggestionElement = document.getElementById("suggestion");
  suggestionElement.textContent =  suggestion;
}

// Add event listener to the button
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", handleClick);

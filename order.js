// Array of lunch options for Indians
var lunchOptions = [
  

  {
      name: "Cooked Meat and Sauce platter",
      imageUrl: "img/food1.png"
  },
  
{
  name: "Noodles",
  imageUrl:"img/noodles.png"
},


{
  name:"Steak With Tomatoes",
  imageUrl:"img/steakWithTomatoes.png"
},
{
  name:"Samosa",
  imageUrl:"img/samosa.png"
},
{
  name:"Chapathi",
  imageUrl:"img/chapathi.png"
},
{
  name:"French Fries",
  imageUrl:"img/frenchfries.png"
},
{
  name:"Chole bhature",
  imageUrl:"img/cholebhature.png"
}

  
];

// Function to generate a random lunch suggestion
function generateLunchSuggestion() {
  const randomIndex = Math.floor(Math.random() * lunchOptions.length);
  return lunchOptions[randomIndex];
}

// Function to handle button click event
function handleClick() {
  const suggestion = generateLunchSuggestion();
  const suggestionElement = document.getElementById("suggestion");
  const suggestedImage = document.getElementById("one");

  suggestionElement.textContent = suggestion.name;
  suggestedImage.src = suggestion.imageUrl;
}

// Add event listener to the button
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", handleClick);

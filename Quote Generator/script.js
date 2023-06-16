// init arrays
var favorites = [];
var quotes = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    content: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    content: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    content:
      "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    content:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    content: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    content:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function generatequote() {
  var pcont = document.querySelector("#quote-content");
  var pauth = document.querySelector("#quote-author");
  pcont.textContent = getRandomQuote().content;
  pauth.textContent = getRandomQuote().author;
}

function toggleFavorites() {
  var favoritesContainer = document.querySelector(".favorites-container");
  favoritesContainer.style.display =
    favoritesContainer.style.display === "none" ? "block" : "none";
}
function displayFavorites() {
  var favoritesDiv = document.querySelector("#favorites-list");

  // clear previous content
  favoritesDiv.innerHTML = "";

  favorites.forEach(function (quote) {
    var quoteDiv = document.createElement("li");
    quoteDiv.textContent = quote.content + " - " + quote.author;
    favoritesDiv.appendChild(quoteDiv);
  });
}
function addToFavorites() {
  var quoteContentDiv = document.querySelector("#quote-content");
  var quoteAuthorDiv = document.querySelector("#quote-author");

  var quote = {
    content: quoteContentDiv.textContent,
    author: quoteAuthorDiv.textContent,
  };

  favorites.push(quote);
  displayFavorites();
}

generatequote(); //generate the first quote

//link the functions to buttons
var addToFavoritesButton = document.querySelector("#add-fav");
addToFavoritesButton.addEventListener("click", addToFavorites);

var generateButton = document.querySelector("#generate-button");
generateButton.addEventListener("click", generatequote);

var showbutton = document.querySelector("#showfavorites");
showbutton.addEventListener("click", toggleFavorites);

//Identifiers

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get Quote from API

async function getQuote() {
  //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log("Error:", error);
  }
}

//On Load

getQuote();

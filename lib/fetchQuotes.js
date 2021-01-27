const fetch = require('node-fetch');
async function fetchQuotes() {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const quoteJson = await response.json();
  const randomNumber = Math.floor(Math.random() * quoteJson.length);
  const quote = quoteJson[randomNumber];
  return { name: quote.character, text: quote.quote, image: quote.image };
}
module.exports = { fetchQuotes };

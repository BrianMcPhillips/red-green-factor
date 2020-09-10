const fetch = require('node-fetch');
async function fetchQuotes() {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const quoteJson = await response.json();
  const quote = quoteJson[0];
  return { name: quote.character, text: quote.quote, image: quote.image };
}
module.exports = { fetchQuotes };

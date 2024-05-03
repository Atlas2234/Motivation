import getQuotes from './modules/quote.js';

const but = document.querySelector(".btn");

const quoteContainer = document.querySelector(".quote");

const url = 'https://type.fit/api/quotes';

// Initial quote generation
getQuotes(url, quoteContainer);

// Button functionality to generate a random quote when pressing a button
but.addEventListener('click', async () => {
 getQuotes(url, quoteContainer);
});
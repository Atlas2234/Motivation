import controlPanel from './modules/controller.js';

const but = document.querySelector(".btn");

const quoteContainer = document.querySelector(".quote");

const url = 'https://type.fit/api/quotes';

// Initial quote generation
window.addEventListener('load', () => {
 controlPanel(url, quoteContainer);
})

// Button functionality to generate a random quote when pressing a button
but.addEventListener('click', async () => {
 controlPanel(url, quoteContainer);
});
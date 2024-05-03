import randomNum from './randomNum.js'
// Display the quotes from the fetched data
const displayQuotes = (data, container) => {
 // Remove the loading animation
  container.classList.remove('loading');

  // Data is an array of objects containing the quote and relevant information about the quote

  // Randomly generate a number
  let rando = randomNum();

  // Access session storage
  const seshStore = sessionStorage.getItem('rand');

  // If the number was previously generated then pick a different number
  if(seshStore == null) {
   // For the first time this page is opened
   sessionStorage.setItem('rand', rando);
  } else if (rando == seshStore) {
   // When the random number generated is the same as the previous one that is stored
   // Keep generating another number until they are different
   while (rando == seshStore) {
    rando = randomNum();
   }
  }
  sessionStorage.setItem('rand', rando);

  // Access the randomly generated number's index in the data array and get the quote from that array item
  const inspiration = data[rando].text;
  // Access the randomly generated number's index in the data array and get the quote's source from that array item
  let origin = data[rando].author;
  // Check if author's name has the substring ", type..."
  if(origin.includes(",")) {
   const commaPos = origin.indexOf(",");
   // Remove the ", type..." substring and keep the author name
   origin = origin.slice(0, commaPos);
  }
  // Update the HTML container with the quote
  container.innerHTML = `<p>"${inspiration}"</p><p id="auth">- ${origin}</p>`;

}

export default displayQuotes;
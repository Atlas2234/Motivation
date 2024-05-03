import randomNum from './randomNum.js'
// Display the quotes from the fetched data
const displayQuotes = (data, container) => {
 // Remove the loading animation
  container.classList.remove('loading')

  // Data is an array of objects containing the quote and relevant information about the quote

  // Randomly generate a number
  const rando = randomNum();

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
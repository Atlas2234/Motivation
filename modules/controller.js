import getQuotes from './quote.js';
import displayQuotes from './display.js';
import fetchLoading from './reloading.js';


// Responsible for invoking the fetching and displaying of the quote
const controlPanel = async (url, container) => {
 // Display the loading HTML when a new quote is going to be fetched
 fetchLoading(container); 
 const data = await getQuotes(url, container);
 displayQuotes(data, container);
}

export default controlPanel;
import getQuotes from './quote.js';
import displayQuotes from './display.js';

// Responsible for invoking the fetching and displaying of the quote
const controlPanel = async (url, container) => {
 const data = await getQuotes(url, container);
 displayQuotes(data, container);
}

export default controlPanel;
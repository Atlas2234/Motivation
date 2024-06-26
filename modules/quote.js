// Fetch the quotes from the quote API 
const getQuotes = async (url) => {
 try {
  const response = await fetch(url);
  const data = await response.json();
  return data;
 } catch (error) {
  console.log(error);
 }
};

export default getQuotes;
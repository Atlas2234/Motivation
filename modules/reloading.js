// Reset the HTML to the loading animation
const fetchLoad = (container) => {
 container.innerHTML = ``;
 container.classList.add('loading');
}

export default fetchLoad;
const button = document.getElementById('vorschauBtn');
const ziel = document.getElementById('vorschau');

const homeButton = document.getElementById('homeBtn');
const homeZiel = document.getElementById('home');


button.addEventListener('click', () => {
  ziel.scrollIntoView({
    behavior: 'smooth',
    block: 'center'      
  });
});

homeButton.addEventListener('click', () => {
  homeZiel.scrollIntoView({
    behavior: 'smooth',
    block: 'end'      
  });
});

const inputSearch = document.querySelector('.search'); 
const spanArticles = document.querySelector('.nb-articles');
const containerProduits = document.querySelector('.products-container-produits');
let cards = document.querySelectorAll('.carte');

let nbArticles = cards.length;
spanArticles.textContent = nbArticles;

inputSearch.addEventListener('input', () => {
    let nbArticles = 0;
    const searchValue = inputSearch.value.toLowerCase(); 

    cards = document.querySelectorAll('.carte');
    cards.forEach(card => {
        const searchString = card.getAttribute('data-search').toLowerCase();

        if(searchString.includes(searchValue)){
            card.classList.remove('hidden');
            nbArticles++;
        } else {
            card.classList.add('hidden'); 
        }
    });
    
spanArticles.textContent = nbArticles;
})
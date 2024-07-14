import '../css/styles.css';
import products from './products';
/* import "./dialog"; */
import Product from './Product';
import "./search";

const productsContainerProduits = document.querySelector('.products-container-produits');
const productsContainerIndex = document.querySelector('.products-container-index');


if(productsContainerIndex){
    for(let i = 0;i<4;i++){
        productsContainerIndex.appendChild(products[i].toCardHtml());
        productsContainerIndex.appendChild(products[i].toDescHtml());
    };
};


if(productsContainerProduits){
    products.forEach(product=>{
        productsContainerProduits.appendChild(product.toCardHtml());
        productsContainerProduits.appendChild(product.toDescHtml());
    });
};




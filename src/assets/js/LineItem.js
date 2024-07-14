//? Le Cart contient un tableau de LineItem. Le LineItem contient les produits. Le LineItem est utilisé pour gérer les quantités.S'il y avait un rabais, le rabais s'appliquerait sur un LineItem et non sur le produit.

import Product from "./Product";

export default class LineItem{
    constructor(product,quantity){
        /**@type {Product} */
        this.product = product;
        /**@type{number} */
        this.quantity = quantity;
    }
}
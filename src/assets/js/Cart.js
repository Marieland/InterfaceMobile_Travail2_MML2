//? Export: Nous allons utiliser la classe  dans un autre fichier plus tard. Default: il y aura un seul export dans ce fichier. Cart: la définition de notre classe.*/
//TODO - les items et le total seront dynamiques. 

// code inutile -0.5

export default class Cart{
    constructor(){
        /**@type{number} */
        this.total = 0;
        /**@type{LineItem[]} */ 
        this.lineItems =[];
    }
}
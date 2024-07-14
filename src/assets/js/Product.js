export default class Product{
/**
 * 
 * @param {string} name 
 * @param {string} shortDesc 
 * @param {string} img 
 * @param {string} prix 
 */


    constructor(name,img, shortDesc,prix,id){
        this.name = name;
        this.img = img;
        this.shortDesc = shortDesc;
        this.prix = prix;
        this.id = id;
    }


    toCardHtml(){
        const carteHtml = document.createElement('div');
        carteHtml.setAttribute('data-search', this.name);

        const nameHtml = document.createElement('span');
        const shortDescHtml = document.createElement('span');
        const imgHtml = document.createElement('img');
        const prixHtml = document.createElement('span');
        const btnAddToCart = document.createElement('button');
        const btnDesc = document.createElement('button');

        carteHtml.className ='carte border border-solid rounded border-slate-300 p-3 flex flex-col items-center gap-3';

        nameHtml.textContent = this.name;
        nameHtml.className ='font-heading font-semibold pb-3';

        shortDescHtml.textContent = this.shortDesc;
        shortDescHtml.className = 'text-sm p-3';

        imgHtml.setAttribute('src',this.img);
        imgHtml.setAttribute('alt', this.name);
        imgHtml.className = 'w-[300px] h-[300px]';

        prixHtml.textContent = this.prix;
        prixHtml.className = 'font-heading font-semibold pb-3';

        btnAddToCart.textContent ='Add to cart';
        btnAddToCart.className ='bg-slate-700 text-white p-1 rounded p-3';
        btnAddToCart.setAttribute('data-dialog','#cart');

        btnDesc.textContent ='Description';
        btnDesc.className ='bg-slate-700 text-white p-1 rounded p-3';
        btnDesc.setAttribute('data-dialog','#'+ this.id);

        carteHtml.appendChild(nameHtml);
        carteHtml.appendChild(shortDescHtml);
        carteHtml.appendChild(imgHtml);
        carteHtml.appendChild(prixHtml);
        carteHtml.appendChild(btnAddToCart);
        carteHtml.appendChild(btnDesc);


        return carteHtml;

    }

    /**
     * 
     * @returns {HTMLDivElement}
     */


    toDescHtml(){
        const modalDescHtml = document.createElement('div');
        const carteDescHtml = document.createElement('div');//type de la valeur de retour de createElement est un élément html.
        const nameHtml = document.createElement('span');
        const shortDescHtml = document.createElement('span');
        const imgHtml = document.createElement('img');
        const prixHtml = document.createElement('span');
        const closeModalBtn = document.createElement('button');
    
        modalDescHtml.className = 'dialog';
        modalDescHtml.id = this.id;
        carteDescHtml.className ='border border-solid rounded border-slate-300 p-3 flex flex-col items-center gap-3 w-1/2 h-1/2 bg-blue-300';
        nameHtml.textContent = this.name;
        nameHtml.className ='font-heading font-semibold pb-3';
        shortDescHtml.textContent = this.shortDesc;
        shortDescHtml.className = 'text-sm p-3';
        imgHtml.setAttribute('src',this.img);
        imgHtml.setAttribute('alt', this.name);
        imgHtml.className = 'w-[300px] h-[300px]';
        prixHtml.textContent = this.prix;
        prixHtml.className = 'font-heading font-semibold pb-3';
        closeModalBtn.textContent ='x';
        closeModalBtn.className ='bg-slate-700 text-white p-1 rounded p-3 btn-close';

        modalDescHtml.appendChild(carteDescHtml);
        carteDescHtml.appendChild(nameHtml);
        carteDescHtml.appendChild(shortDescHtml);
        carteDescHtml.appendChild(imgHtml);
        carteDescHtml.appendChild(prixHtml);
        carteDescHtml.appendChild(closeModalBtn);



        return modalDescHtml;

    }
};

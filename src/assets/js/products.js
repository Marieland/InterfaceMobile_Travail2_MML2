import Product from './Product';

const products = [
    
    new Product(
        "Super Vélo",
        "./assets/images/velo.jpg",
        "Celui dont tous les enfants rêves!",
        99.99,
        'velo'
    ),
  
    new Product(
        "Super ballon",
        "./assets/images/products/ball.svg",
        "Simple et efficace!",
        7.99,
        'ballon'
    ),
 
    new Product(
        "Jouets de plage",
        "./assets/images/products/bucket.png",
        "Plage ou carré de sable, on peut pas se tromper!",
        29.99,
        'seau'
    ),

     new Product(
        "Camion de pompier",
        "./assets/images/products/firetruck.png",
        "Attention les pompiers sont là pour vous sauver!",
        39.99,
        'camion'
     ),

     new Product(
        "Manette de ps3",
        "./assets/images/products/joystick.png",
        "Une manette comme papa! Format petites mains! ",
         39.99,
         'manette'
        ),
  
     new Product(
        "LE wagon",
        "./assets/images/products/wagon.svg",
        "prêt pas prêt j'arrive et j'apporte tous les jouets!",
        49.99,
        'wagon'
    ),

    new Product(
        "Avion",
        "./assets/images/products/plane.svg",
        "Trois, deux, un, décollage! Que c'est beau la terre vu de haut!",
        25.99,
        'avion'
    ),

    new Product(
        "Robot",
        "./assets/images/products/robot.svg",
        "Bienvenue sur ma nouvelle planet, apprend pleins de chansons amusante avec ton nouvel ami Robot.",
        18.99,
        'robot'
    ),

    new Product(
        "Dinosaure",
        "./assets/images/products/dino.svg",
        "Tout droit sortie du Parc Jurassic, Dino n'attends que vous pour partir à l'aventure.",
        22.99,
        'dino'
    )
    
];  

export default products;
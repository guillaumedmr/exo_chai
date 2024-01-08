const Article = require('./class/articleClass')
const Panier = require('./class/panierClass')


const panier = new Panier();

const article1 = new Article('Ordinateur portable', 1200, 5);
const article2 = new Article('Smartphone', 800, 3);

panier.ajouterArticle(article1);
panier.ajouterArticle(article2);
console.log('Montant total du panier: ' + panier.calculerMontantTotal());

panier.appliquerCoupon(100);
console.log('Montant total du panier après coupon: ' + panier.calculerMontantTotal());

panier.appliquerRemise(10);
console.log('Montant total du panier après remise: ' + panier.calculerMontantTotal());

panier.retirerArticle(article1);
console.log('Montant total du panier après retrait: ' + panier.calculerMontantTotal());

panier.viderPanier();
console.log('Montant total du panier après vidage: ' + panier.calculerMontantTotal());


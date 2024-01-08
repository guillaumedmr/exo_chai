const { expect } = require('chai');
const Article = require('../src/class/articleClass');
const Panier = require('../src/class/panierClass');
const Remise = require('../src/class/remiseClass');

describe('Panier', () => {
  it('ajouterArticle devrait ajouter un article au panier', () => {
    const panier = new Panier();
    const article = new Article('Ordinateur portable', 1200, 2);

    panier.ajouterArticle(article);

    expect(panier.articles).to.include(article);
  });

  it('retirerArticle devrait retirer un article du panier', () => {
    const panier = new Panier();
    const article = new Article('Ordinateur portable', 1200, 2);

    panier.ajouterArticle(article);
    panier.retirerArticle(article);

    expect(panier.articles).to.not.include(article);
  });

  it('viderPanier devrait vider le panier', () => {
    const panier = new Panier();
    const article = new Article('Ordinateur portable', 1200, 2);

    panier.ajouterArticle(article);
    panier.viderPanier();

    expect(panier.articles).to.be.an('array').that.is.empty;
  });

  it('calculerMontantTotal devrait calculer le montant total du panier', () => {
    const panier = new Panier();
    const article1 = new Article('Ordinateur portable', 1200, 2);
    const article2 = new Article('Smartphone', 800, 3);

    panier.ajouterArticle(article1);
    panier.ajouterArticle(article2);

    expect(panier.calculerMontantTotal()).to.equal(2 * 1200 + 3 * 800);
  });
});

describe('Remise', () => {
    it('appliquerRemise devrait appliquer une réduction correcte', () => {
      const remise = new Remise(10);
      const montantApresRemise = remise.appliquerRemise(100);
  
      expect(montantApresRemise).to.equal(90);
    });
  });
  
  describe('Panier avec Remise', () => {
    it('calculerMontantTotal devrait inclure la remise', () => {
      const panier = new Panier();
      const article1 = new Article('Ordinateur portable', 1200, 2);
      const article2 = new Article('Smartphone', 800, 3);
  
      panier.ajouterArticle(article1);
      panier.ajouterArticle(article2);
  
      panier.appliquerRemise(10);
  
      const montantTotalAvecRemise = panier.calculerMontantTotal();
  
      expect(montantTotalAvecRemise).to.equal(4320);
    });
  });
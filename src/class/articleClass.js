class Article {
    constructor(nom, prix, quantite) {
      this.nom = nom;
      this.prix = prix;
      this.quantite = quantite;
    }
  
    afficherDetails() {
      console.log(`Article: ${this.nom}, Prix: ${this.prix}, Quantité: ${this.quantite}`);
    }

    calculerMontantTotal() {
    return this.prix * this.quantite;
  }

  }

module.exports = Article;

const Remise = require('./remiseClass');

class Panier {
    constructor() {
      this.articles = [];
      this.remise = null;
    }
  
    ajouterArticle(article) {
      this.articles.push(article);
      console.log(`${article.nom} a été ajouté au panier.`);
    }
  
    retirerArticle(article) {
      const index = this.articles.indexOf(article);
      if (index !== -1) {
        this.articles.splice(index, 1);
        console.log(`${article.nom} a été retiré du panier.`);
      } else {
        console.log(`${article.nom} n'est pas dans le panier.`);
      }
    }
  
    viderPanier() {
      this.articles = [];
      console.log('Le panier a été vidé.');
    }
  
    calculerMontantTotal() {
        let total = 0;
        for (const article of this.articles) {
          // Vérifier si l'objet a la méthode calculerMontantTotal avant de l'appeler
          if (typeof article.calculerMontantTotal === 'function') {
            total += article.calculerMontantTotal();
          } else {
            console.error('La méthode calculerMontantTotal n\'est pas définie sur l\'article.');
          }
        }


        if (this.remise) {
            total = this.remise.appliquerRemise(total);
            }

        return total;
      }

      appliquerRemise(taux) {
        this.remise = new Remise(taux);
        console.log(`Remise de ${taux}% appliquée au panier.`);
      }

  }

module.exports = Panier;
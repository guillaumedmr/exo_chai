class Remise {
    constructor(taux) {
      this.taux = taux;
    }
  
    appliquerRemise(montant) {
      const reduction = (this.taux / 100) * montant;
      return montant - reduction;
    }
  }
  
module.exports = Remise; 
class Coupon {
    constructor(montantReduction) {
      this.montantReduction = montantReduction;
    }
  
    appliquerCoupon(montant) {
      return montant - this.montantReduction;
    }
  }
  
  module.exports = Coupon;  
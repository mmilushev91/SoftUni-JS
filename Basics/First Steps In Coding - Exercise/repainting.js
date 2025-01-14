function solve(nylonSqM, paintLiters, diluentLiters, workHours) {
  costs = {
    nylonPrice: (nylonSqM + 2) * 1.5,
    paintPrice: (paintLiters + (paintLiters * 0.10)) * 14.50,
    dulientPrice: diluentLiters * 5,
    bagsPrice: 0.40,
    calcMaterialsCosts: function() {
      return this.nylonPrice + this.paintPrice + this.bagsPrice + this.dulientPrice;
    },
  }
  
  const workPrice = (costs.calcMaterialsCosts() * 0.30) * workHours;
  const totalPrice = costs.calcMaterialsCosts() + workPrice;

  console.log(totalPrice);
}

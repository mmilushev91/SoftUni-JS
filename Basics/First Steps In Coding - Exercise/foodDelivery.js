function solve(chickenMenus, fishMenus, vegetarianMenus) {
  costs = {
    chickenMenusPrice: chickenMenus * 10.35,
    fishMenusPrice: fishMenus * 12.40,
    vegetarianMenusPrice: vegetarianMenus * 8.15,
    calcMenusPrice: function () {
      return this.chickenMenusPrice + this.fishMenusPrice + this.vegetarianMenusPrice;
    },
    deliveryPrice: 2.50,
    desertPercent: 0.20,
  }
  
  const menusPrice = costs.calcMenusPrice();
  const desertPrice = menusPrice * costs.desertPercent;
  const totalPrice = menusPrice + desertPrice + costs.deliveryPrice;
  
  console.log(totalPrice);
}

function solve(budget, statists, outfitPrice) {
  const decorPrice = budget * 0.10;
  
  if (statists > 150) outfitPrice -= outfitPrice * 0.10;
  
  const price = statists * outfitPrice + decorPrice;
  
  if (budget < price) {
    
    console.log(
  `Not enough money!\nWingard needs ${(price - budget).toFixed(2)} leva more.`)
  } 
  
  else {
    console.log(
      `Action!\nWingard starts filming with ${(budget - price).toFixed(2)} leva left.`)
  }
}

function solve(tourPrice, puzzleCount, talingDollCount, teddyBearCount, minionCount, truckCount) {
  const prices = {
    puzzle: 2.60 * puzzleCount,
    talkingDoll: 3 * talingDollCount,
    teddyBear: 4.10 * teddyBearCount,
    minion: 8.20 * minionCount,
    truck: 2 * truckCount,
    calcTotalIncome: function() {
      return this.puzzle + this.talkingDoll + this.teddyBear + this.minion + this.truck 
    },
  }
  
  let totalIncome = prices.calcTotalIncome()
  
  const toyCount = puzzleCount + talingDollCount + teddyBearCount + minionCount + truckCount;
  
  if (toyCount >= 50) totalIncome-= totalIncome * 0.25; 
  
  
  const rent = totalIncome * 0.10;
  totalIncome -= rent;
  
  if (totalIncome >= tourPrice) {
      console.log(`Yes! ${(totalIncome - tourPrice).toFixed(2)} lv left.`)
  } 
  
  else {
    console.log(`Not enough money! ${(tourPrice - totalIncome).toFixed(2)} lv needed.`)
  }
  
}

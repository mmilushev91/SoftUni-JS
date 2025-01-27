function solve(gramsArray) {
  const arrayLength = gramsArray.length;
  const gramPrice = 67.51;
  const bitcoinPrice = 11949.16;
  
  let day = 0;
  let bgnLeva = 0
  let boughtBitcoins = 0;
  let firstBitcoinBought = 0;
  
  for (let i = 0; i < arrayLength; i ++){
    day++;
    let minedGold = gramsArray[i];
    
    if (day % 3 === 0) minedGold -= minedGold * 0.30;
    
    bgnLeva += minedGold * gramPrice;
    
    while (bgnLeva >= bitcoinPrice) {
      if (!firstBitcoinBought) firstBitcoinBought = day;
      
      boughtBitcoins++;
      bgnLeva -= bitcoinPrice;
    }
    
  }
  
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  
  if (boughtBitcoins) console.log(`Day of the first purchased bitcoin: ${firstBitcoinBought}`);
  
  console.log(`Left money: ${bgnLeva.toFixed(2)} lv.`)
}

function solve(age, washingMachinePrice, toyMoney) {
  let evenYearMoney = 10;
  
  let gatheredMoney = 0;
  
  for (let i = 1; i <= age; i++) {
    
    if (i % 2 === 0) {
      gatheredMoney += evenYearMoney - 1;
      
      evenYearMoney += 10;
    }
    
    else {
      gatheredMoney += toyMoney;
    }
    
  }
  
  if (gatheredMoney >= washingMachinePrice) {
    console.log(`Yes! ${(gatheredMoney - washingMachinePrice).toFixed(2)}`)
  }
  
  else {
    console.log(`No! ${(washingMachinePrice - gatheredMoney).toFixed(2)}`)
  }
 
}

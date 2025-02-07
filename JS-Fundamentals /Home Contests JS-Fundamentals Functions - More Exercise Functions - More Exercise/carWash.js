function solve(array) {
  let percentage = 0;
  
  for (item of array) {
    switch (item) {
      case 'soap':
        percentage += 10;
        break;
        
      case "water":
        percentage += percentage * 0.20;
        break;
      
      case "vacuum cleaner":
        percentage += percentage * 0.25;
        break;
      
      case "mud":
        percentage -= percentage * 0.10;
        break;
    }
    
  }
  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}

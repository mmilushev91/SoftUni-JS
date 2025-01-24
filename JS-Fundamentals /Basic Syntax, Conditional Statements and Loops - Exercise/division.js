function solve(number) {
  
  let biggestDivider;
  
  if (number % 10 === 0) {
    biggestDivider = 10;
  }
  
  else if (number % 7 === 0) {
    biggestDivider = 7;
  }
  
  else if (number % 6 === 0) {
    biggestDivider = 6;
  }
  
  else if (number % 3 === 0) {
    biggestDivider = 3;
  }
  
  else if (number % 2 === 0) {
    biggestDivider = 2;
  }
  
  biggestDivider ? console.log(`The number is divisible by ${biggestDivider}`) : console.log("Not divisible");
 
}

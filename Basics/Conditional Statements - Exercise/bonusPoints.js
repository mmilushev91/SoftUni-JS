function solve(num) {
  let bonusPoints = 0;
  let totalPoints = num;
  
  if (num <= 100) {
    bonusPoints = 5;
  } 
  
  else if (num <= 1000){
    bonusPoints = num * 0.20;
    
  } 
  
  else {
    bonusPoints = num * 0.10;
  }
  
  if (num % 2 === 0) {
    bonusPoints += 1;
  }
  
  if (num % 10 === 5) {
    bonusPoints += 2;
  }
  
  totalPoints += bonusPoints;
  
  console.log(bonusPoints);
  console.log(totalPoints);
}

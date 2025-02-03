function solve(yieldSpices) {
  let minedSpices = 0;
  let day = 0;
  
  const subtractSpices = function() {
    26 < minedSpices ? minedSpices -= 26 : minedSpices = 0;
  }
  
  while (yieldSpices >= 100) {
    day++;
    minedSpices += yieldSpices;
    
    subtractSpices();
    
    yieldSpices -= 10;
  } 
  subtractSpices();  
  
  console.log(day)
  console.log(minedSpices)
}

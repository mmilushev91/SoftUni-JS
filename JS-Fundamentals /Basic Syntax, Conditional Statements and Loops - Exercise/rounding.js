function solve(number, decimals) {
  
  if (decimals > 15) decimals = 15;
  
  console.log(`${parseFloat(number.toFixed(decimals))}`);
}

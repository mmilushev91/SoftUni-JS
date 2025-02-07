function solve(type, rows, cols) {

  const prices = {
    "Premiere": 12,
    "Normal": 7.5,
    "Discount": 5,
  }
  
  const seats = rows * cols;
  const price = prices[type] * seats;
  
  console.log(`${price.toFixed(2)}\nleva`)
}

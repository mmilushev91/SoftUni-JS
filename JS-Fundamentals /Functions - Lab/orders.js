function solve(drink, quantity) {
  
  const bill = {
    coffee: 1.50,
    water: 1.00,
    coke: 1.40,
    snacks: 2.00,
    }
  
  return `${(bill[drink] * quantity).toFixed(2)}`;
}

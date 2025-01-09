function solve(fruit, weight, price) {
  const weightInKgs = weight / 1000
  const finalPrice = weightInKgs * price;
  
  console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`);
}

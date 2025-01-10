function solve(yearlyTax) {
  const shoes = yearlyTax - yearlyTax * 0.40;
  const outfit = shoes - shoes * 0.20;
  const ball = outfit / 4;
  const accessories = ball / 5;
  
  const totalCost = shoes + outfit + ball + accessories + yearlyTax;
  
  console.log(totalCost)
}

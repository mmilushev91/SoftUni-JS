function solve(num1, operator, num2) {
  
  operations = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => num1 / num2,
  }
  
  console.log((operations[operator]()).toFixed(2))
}

function solve(num1, num2) {
  
  const calcFactorial= function(num){
    let factorial = num;
    
    for (let i = num - 1; i >= 1; i--) {
      factorial *= i;
    }
    
    return factorial;
  }
  
  const num1Factorial = calcFactorial(num1);
  const num2Factorial = calcFactorial(num2);
  
  const result = `${(num1Factorial / num2Factorial).toFixed(2)}`
  
  console.log(result);
}

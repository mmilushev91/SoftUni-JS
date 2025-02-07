function solve(number) {
  const covertDigit = (num) => Number(num);
  const sumNumbers = function() {
    let sum = 0;
    
    for (num of numbers) {
      sum += num;
    }
    
    return sum;
  }
  
  const numbers = String(number).split("").map(covertDigit);
  
  let average = sumNumbers() / numbers.length;

  while (average <= 5) {
    numbers.push(9);
    average = sumNumbers() / numbers.length;
  }
  
  console.log(numbers.join(""))
  
}

function solve(numbers, bomb) {
  const numbersLength = numbers.length
  const [num, power] = bomb;
  const output = [];
  
  idx = 0
  while (idx < numbersLength) {
    
    if (numbers[idx] !== num) {
      output.push(numbers[idx]);
      idx++;
      
    }
    
    else {
      for (let i = 0; i < power; i++) {
        output.pop();
      }
      
      idx += power + 1;
    }
  }
  
  let sum = 0;
  output.forEach((a) => sum += a)
  console.log(sum)
}

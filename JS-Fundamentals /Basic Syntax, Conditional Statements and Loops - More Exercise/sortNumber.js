function solve(num1, num2, num3) {
  
  const nums = [num1, num2, num3].sort((a, b) => b - a);
  
  for (num of nums) {
    console.log(num);
  }

}

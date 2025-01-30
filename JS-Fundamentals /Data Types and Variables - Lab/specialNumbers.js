function solve(number) {
  
  const calculateDigitSum = function(num) {
    const numString = num.toString();
    let digitSum = 0;
    
    for (digit of numString) {
      digitSum += Number(digit);
    }
    
    return digitSum;
  }

  for (let i = 1; i <= number; i++) {
    const digitSum = calculateDigitSum(i);
    let isSpecial = "False";
    
    if (digitSum === 5 || digitSum === 7 || digitSum === 11) isSpecial = "True";
    
    console.log(`${i} -> ${isSpecial}`);
  }
  
}

function solve(number) {
  const stringNumber = number.toString();
  let digitSum = 0;
  
  for (digit of stringNumber) {
    digitSum += Number(digit);
  }
  
  console.log(digitSum)
}

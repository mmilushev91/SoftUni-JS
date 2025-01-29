function solve(num) {
  
  const stringNum = String(num);
  let digitSum = 0;
  let isAmazing = false;
  
  for (digit of stringNum) {
    digitSum += Number(digit);
  }
  
  const digitSumString = String(digitSum);
  
    for (digit of digitSumString) {
      if (digit === "9") {
      isAmazing = true;
      break;
    }
  }
  
  console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`)

}

function solve(num) {
  const stringNum = String(num);
  const firstDigit = stringNum[0];
  const numLength = stringNum.length 
  let equalDigits = true;
  let sumDigits = Number(firstDigit);
  
  for (let i = 1; i < numLength; i++) {
    if (firstDigit !== stringNum[i]) {
      equalDigits = false;
    }
    
    sumDigits += Number(stringNum[i]);
  }
  
  console.log(equalDigits);
  console.log(sumDigits)
}

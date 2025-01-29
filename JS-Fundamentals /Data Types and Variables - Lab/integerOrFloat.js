function solve(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  const sumString = String(sum);
  const sumStringLength = sumString.length;
  let type = "Integer";
  
  for (let i = 0; i < sumStringLength; i++) {
    
    if (sumString[i] === ".") {
      type = "Float";
      break;
    }
  }
  
  console.log(`${sumString} - ${type}`)
}

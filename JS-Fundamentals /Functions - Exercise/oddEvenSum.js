function solve(number) {
  const numberAsString = String(number);
  const numberAsStringLength = numberAsString.length;
  
  let evenDigitsSum = 0;
  let oddDigitsSum = 0;
  
  for (let i = 0; i < numberAsStringLength; i++) {
    const currentNumber = Number(numberAsString[i]);
    
    currentNumber % 2 === 0 ? evenDigitsSum += currentNumber : oddDigitsSum += currentNumber;
  }
  
  return `Odd sum = ${oddDigitsSum}, Even sum = ${evenDigitsSum}`
}

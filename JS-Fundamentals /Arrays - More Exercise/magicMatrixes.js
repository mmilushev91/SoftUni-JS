function solve(array) {
  const sumNumbers = (numbers) => {
    let sum = 0;
    const numbersLength = numbers.length;
    
    for (let i = 0; i < numbersLength; i++) {
      sum += numbers[i];
    }
    
    return sum;
  }
  
  const magicSum = sumNumbers(array[0]);
  const arrayLength = array.length;
  let isMagic = true;
  let columnSum = []
  
  for (let i = 0; i < arrayLength; i++) {
    columnSum.push(0);
  }

  for (let i = 0; i < arrayLength; i++) {

    for (let j = 0; j < arrayLength; j++) {
      
      columnSum[j] += array[i][j]
    }
    
    if (sumNumbers(array[i]) !== magicSum) {
      isMagic = false;
      break
    }
  }
  
  for (item of columnSum) {
    if (item !== magicSum) {
      isMagic = false;
    }
  }
  
  isMagic ? console.log(true) : console.log(false);

}

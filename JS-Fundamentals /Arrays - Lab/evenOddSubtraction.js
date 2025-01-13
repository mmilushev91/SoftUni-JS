function solve(array) {
  let sumEven = 0;
  let sumOdd = 0;
  const arrayLength = array.length;
  
  for (let i = 0; i < arrayLength; i++) {
    
    array[i] % 2 === 0 ? sumEven += array[i] : sumOdd += array[i];
  }
  
  console.log(sumEven - sumOdd);
}

solve([1,2,3,4,5,6])

function solve(array) {
  const arrayLength = array.length;
  let sumEven = 0;
  
  for (let i = 0; i < arrayLength; i++) {
    const currentNum = Number(array[i]);
    
    if (currentNum % 2 === 0) sumEven += currentNum;
  }
  
  console.log(sumEven)
  
};

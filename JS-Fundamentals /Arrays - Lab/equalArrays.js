function solve(array1, array2) {
  let areEqual = true;
  let sumArray1 = 0;
  const arrayLength = array1.length;
  
  for (let i = 0; i < arrayLength; i++) {
    
    if (array1[i] !== array2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break
    }
    
    sumArray1 += Number(array1[i]);
  }
  
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sumArray1}`)
  }
}

solve(['1','2','3','4','5'], ['1','2','4','4','5']);

function solve(array) {
  const arrayLength = array.length 
  let isEqual = false;
  
  for (let i = 0; i < arrayLength; i++) {
    let leftSum = 0;
    let rightSum  = 0;
    
    for (let j =  i - 1; j >= 0; j--) {
      leftSum += array[j];
    }
    
    for (let j =  i + 1; j < arrayLength; j++) {
      rightSum += array[j];
    }
    
    if (leftSum == rightSum) {
      isEqual = true;
      console.log(i);
      break;
    }
    
  }
  
  if (!isEqual) console.log("no");
  
}

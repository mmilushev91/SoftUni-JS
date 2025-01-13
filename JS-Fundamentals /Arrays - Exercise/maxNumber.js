function solve(array) {
  const arrayLength = array.length;
  const topIntegers = [];
  
  for (let i = 0; i < arrayLength; i++) {
    let isItTop = true;
    
    for (let j = i; j < arrayLength; j++) {
      
      if (array[j] > array[i]) {
        isItTop = false;
        break;
      }
    }
    
    if (isItTop && !topIntegers.includes(array[i])) topIntegers.push(array[i]);
  }
  
  console.log(topIntegers.join(" "));
  
}

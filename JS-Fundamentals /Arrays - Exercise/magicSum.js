function solve(array, num) {
  const arrayLength = array.length;
  
  for (let i = 0; i < arrayLength; i++) {
    
    for (let j = i + 1; j < arrayLength; j++) {
      
      if (array[i] + array[j] === num) console.log(array[i], array[j]);
    }
  }

}

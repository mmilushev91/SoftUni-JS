function solve(array) {
  let biggestNumber = array[0];
  const arrayLength = array.length;
  const numbers = [array[0]];
  
  for (let i = 1; i < arrayLength; i++) {
    
    if (array[i] >= biggestNumber) {
      biggestNumber = array[i];
      numbers.push(biggestNumber);
    }
  }
  
  console.log(numbers.join(" "));
}

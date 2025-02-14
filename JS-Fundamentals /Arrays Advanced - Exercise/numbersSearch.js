function solve(array1, array2) {
  
  const [len, itemsToDelete, num] = array2;
  
  const numbers = array1.splice(0, len);
  let numCount = 0
  
  for (let i = 0; i < itemsToDelete; i++) {
    numbers.shift()
  }
  for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] === num) numCount++;
  }
  console.log(`Number ${num} occurs ${numCount} times.`)   
}

function solve(array) {
  let arraySum = 0;
  let newArraySum = 0;
  
  const arrayLength = array.length;
  const newArray = [];
  
  for (i = 0; i < arrayLength; i++) {
    let number = array[i];
    
    arraySum += number;
    
    number % 2 === 0 ? number += i : number -= i;
    
    newArray.push(number);
    newArraySum += number;
  }
  
  console.log(newArray);
  console.log(arraySum);
  console.log(newArraySum);

}

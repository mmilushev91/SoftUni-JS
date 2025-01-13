function solve(array1, array2) {
  const arrayLength = array1.length 
  const newArray = [];
  
  for (let i = 0; i < arrayLength; i++) {
    const num1 = Number(array1[i]);
    const num2 = Number(array2[i]);
    
     i % 2 === 0 ? newArray.push(num1 + num2) : newArray.push(array1[i] + array2[i]);
  }
  
  console.log(newArray.join(" - "));
}

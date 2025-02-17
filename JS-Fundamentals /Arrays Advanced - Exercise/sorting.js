function solve(array) {
  
  
  const ascending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);
  
  const arrayLength = array.length;
  
  const interval = Math.ceil(arrayLength / 2);
  const output = []
  
  for (let i = 0; i < interval; i++) {
    output.push(descending[i]);
    
    if (i === interval - 1 && arrayLength % 2 !== 0) {
      break;
    }

    output.push(ascending[i]);
  }
  console.log(output.join(" "))
}

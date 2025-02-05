function solve(array) {
  const arrayLength = array.length - 1;
  const step = Number(array[arrayLength])
  const output = [];
  
  for (let i = 0; i < arrayLength; i += step) {
    output.push(array[i]);
  }
  
  console.log(output.join(" "));
}

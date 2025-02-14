function solve(array) {
  const ascending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);
  
  const interval = array.length / 2;
  const output = []
  
  for (let i = 0; i < interval; i++) {
    output.push(descending[i])
    output.push(ascending[i])
  }
  console.log(output.join(" "))
}

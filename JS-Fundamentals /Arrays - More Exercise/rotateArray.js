function solve(array) {
  const forEnd = Number(array.pop());
  
  for (let i = 0; i < forEnd; i++) {
    array.unshift(array.pop());
  }
  
  console.log(array.join(" "));
}

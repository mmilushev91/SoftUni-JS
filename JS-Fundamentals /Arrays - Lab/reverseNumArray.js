function solve(interval, array) {
  
  const newArray = [];
  
  for (let i = interval - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  
  console.log(newArray.join(" "));
  
}

solve(3, [10, 20, 30, 40, 50]);

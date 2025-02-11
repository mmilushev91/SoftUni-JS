function solve(array) {
  const newArray = [];
  
  for (const item of array) {
    if (Number(item) < 0) {
      newArray.unshift(item);
    }
    
    else {
      newArray.push(item);
    }
  }
  
  for (const item of newArray) {
    console.log(item);
  }
}

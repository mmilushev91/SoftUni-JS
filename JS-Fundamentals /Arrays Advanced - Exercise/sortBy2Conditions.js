function solve(array) {
array.sort(
  (a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    
    return a.localeCompare(b);
    }
  )
  
  for (const item of array) {
    console.log(item)
  }
}

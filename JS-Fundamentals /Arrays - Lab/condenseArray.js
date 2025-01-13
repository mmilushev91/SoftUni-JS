function solve(array) {
  
  while (array.length !== 1) {
    
    const midArray = [];
    const end = array.length - 1;
    
    for (let i = 0; i < end; i++) {
      midArray.push(array[i] + array[i+1]);
      
    }
    
    array = midArray;
  }
  console.log(array[0]);
}

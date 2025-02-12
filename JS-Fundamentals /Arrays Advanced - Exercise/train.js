function solve(array) {
  const convertNum = (num)=> Number(num)
  
  const wagons = array[0].split(" ").map(convertNum);
  const limit = convertNum(array.slice(1, 2, 1));
  const line = array.slice(2);
  let passengers;

  for (const item of line) {
    
    if (item.startsWith("Add")) {
      wagons.push(Number(item.slice(item.indexOf(" ") + 1)))
    } 
    else {
      passengers = Number(item);
      for (const [idx, wagon] of wagons.entries()) {
        
        if (wagon + passengers <= limit) {
          wagons[idx] += passengers;
          break;
        }
      }   
    }
  }
console.log(wagons.join(" "))
}

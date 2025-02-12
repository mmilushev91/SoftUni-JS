function solve(array) {
  const numbers = array[0].split(" ");
  const commands = array.slice(1);

  
  for (let line of commands) {
    const [command, index, pos] = line.split(" ")
    
    
    if (command === "Add") {
      numbers.push(index)
    }
      
    else if (command === "Remove") {
      
      while (numbers.includes(index)) {
        numbers.splice(index, 1)
      }
    }
    
    else if (command === "RemoveAt") {
      numbers.splice(index, 1)
    }
    
    
    else {
 
      numbers.splice(Number(pos), 0, index);
    }
  }
  
  console.log(numbers.join(" "));
}

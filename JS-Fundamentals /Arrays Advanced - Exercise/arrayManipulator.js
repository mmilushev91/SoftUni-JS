function solve(numbers, commands) {
  const commandsLength = commands.length;
  
  for (const commandLine of commands) {

    let [command, ...rest] = commandLine.split(" ");
    rest = rest.map(function(a) {
      if (typeof Number(a) === "number") {
        return Number(a);
      }
      return a;
    });
  
    if (command === "add") {
      const [index, element] = rest;
      numbers.splice(index, 0, element);
    }
    
    // addMany <index><element 1> <element 2> … <element n> – 
    // adds a set of elements at the specified index.
    else if (command === "addMany") {
      const [index, ...elements] = rest;
      numbers.splice(index, 0, ...elements);
    }
    
    else if (command === "contains") {
      const element = rest[0];
      console.log(numbers.includes(element) ? numbers.indexOf(element) : -1);
    }
    
    else if (command === "remove") {
      const index = rest[0];
      numbers.splice(index, 1)
    }
    
    else if (command === "shift") {
      const positions = rest[0];
      
      for (let i = 0; i < positions; i++) {
        numbers.push(numbers.shift())
      }
    } 
    
    else if (command === "sumPairs") {
      const numbersLength = numbers.length;
      const sumArray = []
      
      for (let i = 0; i < numbersLength; i += 2) {
        if (i === numbersLength - 1) {
          
          sumArray.push(numbers[i]);
        } 
        
        else {
          sumArray.push(numbers[i] + numbers[i+1]);
        }      
      }
      
      numbers = [...sumArray];
    }
    else {
      console.log(`[ ${numbers.join(", ")} ]`)
   }
   
  } 
  
}

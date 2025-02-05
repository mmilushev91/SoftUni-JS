function solve(commands) {
  let increment = 0;
  const commandsLength = commands.length;
  const numbers = [];
  
  for (let i = 0; i < commandsLength; i++) {
    commands[i] === "add" ? numbers.push(i+1) : numbers.pop();
  }
  
  numbers.length !== 0 ? console.log(numbers.join(" ")) : console.log("Empty")

}

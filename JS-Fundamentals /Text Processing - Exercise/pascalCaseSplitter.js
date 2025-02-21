function solve(string) {
  let part = string[0];
  const stringLength = string.length;
  const output = [];
  
  for (let i = 1; i < stringLength; i++) {
    
    if (string[i] === string[i].toUpperCase()) {
      output.push(part);
      part = string[i];
    }
    
    else {
      part += string[i];
    }
  }
  output.push(part);
  console.log(output.join(", "));
}

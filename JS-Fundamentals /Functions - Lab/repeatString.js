function solve(string, times) {
  let repeatedString = "";
  
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }
  
  return repeatedString;
}

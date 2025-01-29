function solve(first, char, second) {
  
  const firstLength = first.length;
  const firstArray = first.split("");
  
  for (let i = 0; i < firstLength; i++) {
    
    if (firstArray[i] === "_") {
      firstArray[i] = char;
      break
    }
  }
  
  const firstArrayString = firstArray.join("");
  
  firstArrayString === second ? console.log("Matched") : console.log("Not Matched");
}

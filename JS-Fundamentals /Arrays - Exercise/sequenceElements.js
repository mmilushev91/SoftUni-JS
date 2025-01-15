function solve(array) {
  const arrayLength = array.length;
  
  let longestSequence = []
  let buildSequence = []
   
  for (let i = 0; i < arrayLength; i++) {
    const currentNum = array[i];
    
    
    if (buildSequence.length === 0) {
      buildSequence.push(currentNum);
      continue;
    }
    
    if (currentNum !== buildSequence[0]) {
      buildSequence = [];
    }
    
    buildSequence.push(currentNum);
    
    if (buildSequence.length > longestSequence.length) {
      longestSequence = buildSequence;
    }

  }
  
  console.log(longestSequence.join(" "));
}

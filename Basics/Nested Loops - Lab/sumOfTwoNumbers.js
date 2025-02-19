function solve(...args) {
  const [start, end, magicNum] = args;
  
  let counter = 0;
  let combinationFound = false;
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      counter++;
      
      if (i + j === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
        combinationFound = true;
        break
      }
    }
    
    if (combinationFound) {
      break;
    }
  }
  
  if (!combinationFound) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

function solve(data) {
  const groupsCount = Number(data[0]);
  
  let musala = monblan = kilimandjaro = k2 = everest = 0;
  let totalClimbers = 0
  
  for (let i = 1; i <= groupsCount; i++) {
    
    const currentGroup = Number(data[i]);
    totalClimbers += currentGroup;
    
    if (currentGroup < 6) {
      musala += currentGroup;
    }
    
    else if (currentGroup < 13) {
      monblan += currentGroup;
    }
     
    else if (currentGroup < 26) {
      kilimandjaro += currentGroup;
    }
    
    else if (currentGroup < 41) {
      k2 += currentGroup;
    }
    
    else {
      everest += currentGroup;
    }
  }
  console.log(`${(musala / totalClimbers * 100).toFixed(2)}%`)
  console.log(`${(monblan / totalClimbers * 100).toFixed(2)}%`)
  console.log(`${(kilimandjaro / totalClimbers * 100).toFixed(2)}%`)
  console.log(`${(k2 / totalClimbers * 100).toFixed(2)}%`)
  console.log(`${(everest / totalClimbers * 100).toFixed(2)}%`)
}

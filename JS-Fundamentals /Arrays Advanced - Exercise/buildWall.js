function solve(sections) {
  //section1 section2 section3 195 cubic yards of concrete
  //[21, 25, 28]
  //section height up to 30
  //1 feet per day, 165
  //585, 585, 390, 390, 390, 195, 195, 195, 195 
  // 5928000 pesos
  
  let concrete = 0;
  let pessos = 0;
  const dailyConcreteArr = [];
  
  while (true) {
    
    let counter = 0;
    let dailyConcrete = 0;
    for (const [idx, section] of sections.entries()) {
      
      if (section === 30) {
        counter++;
        continue;
      }
      
      sections[idx]++;
      dailyConcrete += 195;
      pessos += 195 * 1900;
      
    }

    if (counter === sections.length) break;
    dailyConcreteArr.push(dailyConcrete)
    concrete += dailyConcrete;
  }
  
  console.log(dailyConcreteArr.join(", "));
  console.log(`${pessos} pesos`);

}

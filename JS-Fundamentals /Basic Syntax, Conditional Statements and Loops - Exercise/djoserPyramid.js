function solve(base, height) {
  let loopEnd;
  let gold;
  
  if (base % 2  === 0) {
    loopEnd = 2;
    gold = 4;
    
  } else {
    
    loopEnd = 1;
    gold = 1;
  }
  
  let stones = 0;
  let marbels = 0;
  let lapisLazuli = 0;
  let steps = 0;
  
  let innerLayer, outerLayer;
  
  for (let i = base; i > loopEnd; i -= 2) {
    steps++;
    innerLayer = (i - 2) ** 2 * height;
    outerLayer = ((i * 4) - 4) * height;

    stones += innerLayer;
    
    steps % 5 !== 0 ? marbels += outerLayer : lapisLazuli += outerLayer;
    
  }
  
  steps++;
  
  console.log(`Stone required: ${Math.ceil(stones)}`)
  console.log(`Marble required: ${Math.ceil(marbels)}`)
  console.log(`Lapis Lazuli required: ${lapisLazuli}`)
  console.log(`Gold required: ${gold}`)
  console.log(`Final pyramid height: ${Math.floor(steps * height)}`)
}

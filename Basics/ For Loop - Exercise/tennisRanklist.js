function solve(data) {
  
  const roundPoints = {
    "W": 2000,
    "F": 1200,
    "SF": 720,
  };
  
  const tournamentsCount = Number(data[0]);
  const startPoints = Number(data[1]);
  const loopEnd = data.length;
  
  let tournamentsPoints = wins = 0;
  
  for (let i = 2; i < loopEnd; i++) {
    tournamentsPoints += roundPoints[data[i]];
    
    if (data[i] === "W") {
      wins++;
    }
  }
  console.log(`Final points: ${startPoints + tournamentsPoints}`);
  console.log(`Average points: ${Math.floor(tournamentsPoints / tournamentsCount)}`)
  console.log(`${(wins / tournamentsCount * 100).toFixed(2)}%`)
}

function solve(data) {
  const actorName = data[0];
  let points = Number(data[1]);
  const dataLength = data.length 
  const nomineePoints = 1250.5;
  let failed = true;
  
  for (let i = 3; i < dataLength; i += 2) {
    
    const judgeName = data[i];
    const judgePoints = (judgeName.length * Number(data[i + 1])) / 2;
    
    points += judgePoints;
    
    if (points > nomineePoints) {
      failed = false;
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
      break
    }
  }
  
  if (failed) {
    console.log(`Sorry, ${actorName} you need ${(nomineePoints - points).toFixed(1)} more!`)
  }
}

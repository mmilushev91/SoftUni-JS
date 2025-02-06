function solve(record, distance, timePerM) {
  const waterDelay = Math.floor((distance / 15)) * 12.5;
  
  const totalTime = distance * timePerM + waterDelay;
  
  if (totalTime < record) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
  }
  
  else {
    console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
  }

}

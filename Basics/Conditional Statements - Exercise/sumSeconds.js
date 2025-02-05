function solve(time1, time2, time3) {
  const totalTime = time1 + time2 + time3;
  const minutes = Math.trunc(totalTime / 60);
  let seconds = totalTime % 60;
  
  if (seconds < 10) seconds = `0${seconds}`;
  
  console.log(`${minutes}:${seconds}`);
}

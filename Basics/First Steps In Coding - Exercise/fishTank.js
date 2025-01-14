function solve(len, width, height, takenSpacePercent) {
  const poolVolume = (len * width * height) / 1000;
  const takenSpace = poolVolume * (takenSpacePercent / 100);
  const notTakenVolume = poolVolume - takenSpace;
  
  console.log(notTakenVolume);
}

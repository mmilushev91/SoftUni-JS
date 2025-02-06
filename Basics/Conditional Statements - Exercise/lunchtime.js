function solve(series, episodeLen, breaktime) {
  const lunchtime = breaktime / 8;
  const restime = breaktime / 4;
  
  const timeNeeded = lunchtime + restime + episodeLen;
  
  if (timeNeeded <= breaktime) {
    console.log(`You have enough time to watch ${series} and left with ${Math.ceil(breaktime - timeNeeded)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeNeeded - breaktime)} more minutes.`);
  }
}

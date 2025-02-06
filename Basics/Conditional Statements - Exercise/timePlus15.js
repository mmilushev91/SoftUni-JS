function solve(hours, minutes) {
  
  if (minutes + 15 > 59) {
    hours += 1;
    
    if (hours > 23) {
      hours = 0;
    }
    
    minutes = (minutes + 15) - 60;
    
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    
  } else {
    
    minutes += 15;
  }
  
  console.log(`${hours}:${minutes}`)

}

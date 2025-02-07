function solve(array) {
  const calcDistance = (x1, x2, y1, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let distance, isValid;
  let x1, x2, y1, y2;
  
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        x1 = array[0];
        x2 = 0;
        y1 = array[1];
        y2 = 0
        break;
      case 1:
        x1 = array[2];
        x2 = 0;
        y1 = array[3];
        y2 = 0
        break;
      
      default:
        x1 = array[0];
        x2 = array[1];
        y1 = array[2];
        y2 = array[3];
        break;
    }
    
    distance = calcDistance(x1, x2, y1, y2);
    isValid = Number.isInteger(distance) ? "valid" : "invalid";
    
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`)
  }
  
}

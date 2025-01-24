function solve(num) {
  
  for (let i = 1; i <= num; i++) {
    const line = [];
    
    for (let j = 0; j < i; j++) {
      line.push(i);
    }
    
    console.log(line.join(" "));
  }

}

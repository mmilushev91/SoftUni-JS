function solve(n) {
  console.log('<div class="chessboard">');
  let color;
  
  for (let i = 0; i < n; i++) {
    console.log("  <div>");
    
    for (let j = 0; j < n; j++) {
      
      if (j === 0) {
        
        i % 2 === 0 ? color = "black" : color = "white";
      } else {
        
        color === "black" ? color = "white" : color = "black";
      }
      console.log(`    <span class="${color}"></span>`)
    }
    console.log("  </div>");
  }
  console.log('</div>');
}

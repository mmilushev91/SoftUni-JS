function solve(numbers) {
  let numbersCount = numbers[0];
  
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  
  for (let i = 1; i <= numbersCount; i++) {
    
    if (numbers[i] < 200) {
      p1++;
    } 
    
    else if (numbers[i] < 400) {
      p2++;
    }
    
    else if (numbers[i] < 600) {
      p3++;
    }
    
    else if (numbers[i] < 800) {
      p4++;
    }
    
    else {
      p5++;
    }
  }
  
  console.log(`${((p1 / numbersCount) * 100).toFixed(2)}%`)
  console.log(`${((p2 / numbersCount) * 100).toFixed(2)}%`)
  console.log(`${((p3 / numbersCount) * 100).toFixed(2)}%`)
  console.log(`${((p4 / numbersCount) * 100).toFixed(2)}%`)
  console.log(`${((p5 / numbersCount) * 100).toFixed(2)}%`)
  
}

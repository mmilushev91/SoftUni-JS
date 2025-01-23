function solve(n) {
  let num = 1;
  let sumOdd = 0;
  
  while (n > 0) {
    console.log(num);
    
    sumOdd += num;
    num += 2;
    n--;
  }
  
  console.log(`Sum: ${sumOdd}`)
}

function solve(n, k) {
  const array = [1];
  let sum;
  let numbers;
  for (let i = 0; i < n - 1; i++) {
    numbers = array.slice(-k) ;
    sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    
    array.push(sum);
  }
  
  console.log(array.join(" "));
}

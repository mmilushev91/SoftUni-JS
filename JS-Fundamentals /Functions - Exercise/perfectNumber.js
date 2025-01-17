function solve(num) {
  let divisorSum = 0;
  
  for (let i = 1; i < num; i++) {
   
   if (num % i === 0) divisorSum += i;
  }
  console.log(num === divisorSum ? "We have a perfect number!" : "It's not so perfect.")
}

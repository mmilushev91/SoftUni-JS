function solve(start, end) {
  let sumNums = 0;
  const nums = [];
  
  for (let i = start; i <= end; i++) {
    sumNums += i;
    nums.push(i);
  }
  
  console.log(nums.join(" "));
  console.log(`Sum: ${sumNums}`);

}

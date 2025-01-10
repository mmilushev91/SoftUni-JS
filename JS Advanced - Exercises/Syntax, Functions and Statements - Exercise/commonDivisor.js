function solve(a, b) {
  let largerNum = a;
  let smallerNum = b;
  let largerCommonDivisor;
  
  if (b > a) {
    largerNum = b;
    smallerNum = a;
  }
  
  for (let i = 1; i <= largerNum; i++) {
    
    if (i > smallerNum) {
      break;
    }
    
    if (largerNum % i === 0 & smallerNum % i === 0) {
      largerCommonDivisor = i;
    }
    
  }
  console.log(largerCommonDivisor);
}

function solve(amount, period, yearlyInterestRate) {
  
  let outcome = amount + period * (amount * ((yearlyInterestRate / 12) / 100));
  
  console.log(outcome);
}

function solve(grade) {

  
  if (2 <= grade && grade < 3) {
    console.log(`Fail (2)`);
  }
  
  else if (grade < 3.50) {
    console.log(`Poor (${grade.toFixed(2)})`);
  }
  
  else if (grade < 4.50) {
    console.log(`Good (${grade.toFixed(2)})`);
  }
  
  else if (grade < 5.50) {
    console.log(`Very good (${grade.toFixed(2)})`);
  }
  
  else if (grade <= 6) {
    console.log(`Excellent (${grade.toFixed(2)})`)
  }
}

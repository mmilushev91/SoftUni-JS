function solve(num) {
  
  englishNames = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  }
  
  const numString = String(num);
  const stringLength = numString.length;
  const lastIndex = stringLength - 1;
  const lastDigit = numString[lastIndex];
  
  console.log(englishNames[lastDigit]);

}

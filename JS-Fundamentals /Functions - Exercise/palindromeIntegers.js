
function solve(array) {
  const isItPalindrome = function (number) {
    const reversedNumber = number.toString().split("").reverse().join("");
    return number == reversedNumber;
  }
  const arrayLength = array.length;
  
  for (let i = 0; i < arrayLength; i++) {
    console.log(isItPalindrome(array[i]));
  }
}

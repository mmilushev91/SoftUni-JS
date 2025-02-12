function solve(array) {
  const newArray = [];
  const arrayLength = array.length;
  
  for (let i = 1; i < arrayLength; i+=2) {

    newArray.push(array[i] * 2);
  }
  
  console.log(newArray.reverse().join(" "));
}

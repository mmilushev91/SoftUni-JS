function solve(array) {
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const username = array[0];
  const correctPassword = reverseString(username);
  const arrayLength = array.length;
  
  for (let i = 1; i < arrayLength; i++) {
    
    if (correctPassword === array[i]) {
      console.log(`User ${username} logged in.`);
      break
    }
    else {
      if (i === 4) {
        console.log(`User ${username} blocked!`);
        break
      }
      else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}

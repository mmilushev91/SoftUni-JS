function solve(password) {
  const isAlphaNum = function(pass) {
    const passLen = pass.length;
    
    for (let i = 0; i < passLen; i++) {
      const char = pass[i].charCodeAt(0);
      
      if (!(char > 47 && char < 58) && 
        !(char > 64 && char < 91) &&
        !(char > 96 && char < 123)) {
      
      return false;
        }
    }
    
    return true;
  }
  
  const enoughDigits = function(pass) {
    const passLen = pass.length;
    
    let digitsCount = 0;
    
    for (let i = 0; i < passLen; i++) {
      const currentChar = Number(pass[i])
     
      if (Number.isInteger(currentChar)) {
        digitsCount++;
      }
    }

    return digitsCount >= 2 ? true : false;
  }
  
  let isValid = true;
  
  if (password.length < 6 || password.length > 10) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }
  
  if (!isAlphaNum(password)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }
  
  if (!enoughDigits(password)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) console.log("Password is valid");
}

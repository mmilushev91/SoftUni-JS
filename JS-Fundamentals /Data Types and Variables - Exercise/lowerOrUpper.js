function solve(char) {
  function isUpperCase() {
      const charCode = char.charCodeAt(0);
      return charCode >= 65 && charCode <= 90;
  }
  
  let result;
  isUpperCase() ? result = "upper-case" : result = "lower-case";

  console.log(result)
}

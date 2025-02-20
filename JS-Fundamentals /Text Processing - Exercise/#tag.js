function solve(text) {
  const isAllLetters = (str) => /^[A-Za-z]+$/.test(str)
  
  text.split(" ").forEach(word => {
    
    if (word.startsWith("#") && isAllLetters(word.slice(1))) console.log(word.slice(1));
  })
}

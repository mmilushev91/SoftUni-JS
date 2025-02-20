function solve(word, text) {
  const wordLower = word.toLowerCase();
  const textLower = text.toLowerCase();
  
  const output = textLower.split(" ").includes(wordLower) ? word : `${word} not found!`
  
  console.log(output)
}

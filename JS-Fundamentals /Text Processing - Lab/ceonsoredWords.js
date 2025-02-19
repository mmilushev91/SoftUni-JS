function solve(text, word) {
  const censoredWord = word.replace(word, "*".repeat(word.length));
  const censoredText = text.replaceAll(word, censoredWord);
  
  console.log(censoredText)
}

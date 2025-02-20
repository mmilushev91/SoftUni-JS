function solve(word) {
  let lastChar = word[0];
  let newWord = `${lastChar}`;
  
  for (const char of word) {
    if (char !== lastChar) {
      lastChar = char;
      newWord += char;
    }
  }
  console.log(newWord);
}

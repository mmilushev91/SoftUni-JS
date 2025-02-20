function solve(words, text) {
  
  const wordsLen = {};
  
  words.split(", ").forEach(el => wordsLen[el.length] = el);
  const replacedText = text.split(" ").map(el => el[0] === "*" ? el = wordsLen[el.length] : el).join(" ");
  
  console.log(replacedText)
  
}

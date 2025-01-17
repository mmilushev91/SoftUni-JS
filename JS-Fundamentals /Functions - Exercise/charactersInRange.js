function solve(char1, char2) {
  const endLine = [];
  
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);
  
  if (char1.charCodeAt(0) > char2.charCodeAt(0)) {
    start = char2.charCodeAt(0);
    end = char1.charCodeAt(0);
  }
  
  for (let i = start + 1; i < end; i++) {
    endLine.push(String.fromCharCode(i));
  }
  
  return endLine.join(" ");
}

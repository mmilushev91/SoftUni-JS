function solve(text, inputWord) {
  let counter = 0;
  text.split(" ").forEach(function (word) {
    if (word === inputWord) {
      counter++;
    }
  })
  console.log(counter)
}

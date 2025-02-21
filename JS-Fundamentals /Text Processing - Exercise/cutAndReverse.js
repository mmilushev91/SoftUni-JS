function solve(string) {
  const reverString = (start, end, str) => str.slice(start, end).split("").reverse().join("");
  const midIndex = string.length / 2;
  const first = reverString(0, midIndex, string);
  const second = reverString(midIndex, string.length, string);

  console.log(first);
  console.log(second);
}

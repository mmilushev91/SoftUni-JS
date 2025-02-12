function solve(array) {
  for (const [index, item] of array.sort().entries()) {
    console.log(`${index + 1}.${item}`);
  }
}

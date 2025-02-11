function solve(array) {
  console.log(array.slice(1, 1 + array[0]).join(" "))
  console.log(array.slice(-array[0]).join(" "))
}

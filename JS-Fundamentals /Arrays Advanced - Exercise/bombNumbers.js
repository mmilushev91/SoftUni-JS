function solve(numbers, line) {
  const [bomb, power] = line;
  let start, end, index;

  while (numbers.includes(bomb)) {

    index = numbers.indexOf(bomb);
     
    start = index - power >= 0 ? index - power : 0;
    end = index + power <= numbers.length ? index + power : numbers.length;
    numbers.splice(start, end)
  }
  
  let sum = 0
  numbers.forEach((a) => sum += a)
  console.log(sum)
}

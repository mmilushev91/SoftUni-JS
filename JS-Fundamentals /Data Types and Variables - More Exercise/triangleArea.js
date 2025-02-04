function solve(a, b, c) {
  const semiperimeter = (a + b + c) / 2;
  const area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
  console.log(area)
}

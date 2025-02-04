function solve(radius, height) {
  const volume = (1 / 3) * Math.PI * radius ** 2 * height;
  const slantHeight =  Math.sqrt(height ** 2 + radius ** 2);
  
  const area = Math.PI * radius * (radius + slantHeight);

  console.log(`volume = ${volume.toFixed(4)}`)
  console.log(`area = ${area.toFixed(4)}`)
}

function solve(path) {
  const [name, ...rest] = path.split("\\").slice(-1)[0].split(".");
  let extension = rest.length > 1 ? rest.slice(-1) : rest[0];
  
  console.log(`File name: ${name}`);
  console.log(`File extension: ${extension}`)
}

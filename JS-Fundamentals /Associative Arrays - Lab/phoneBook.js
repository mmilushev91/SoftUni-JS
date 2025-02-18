function solve(array) {
  const phoneBook = {};
  
  for (const line of array) {
    const [name, number] = line.split(" ");
    
    phoneBook[name] = number;
  }
  
  for (const [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`);
  }
 
}

function solve(array) {
  const partList = [];
  let line;
  let name;
  for (const item of array) {

    line = item.split(" ")
    name = line[0];

    if (line[2] === "going!") {
      if (partList.includes(name)) {
        console.log(`${name} is already in the list!`)
      } else {
        partList.push(name);
      }
      
    }
    else {
      
      if (partList.includes(name)) {
        partList.splice(partList.indexOf(name))
      } else {
        console.log(`${name} is not in the list!`)
      }
    }
  }
  console.log(partList.join("\n"))

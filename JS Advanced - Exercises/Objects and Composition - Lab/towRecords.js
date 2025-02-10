function solve(array) {
  const populationInfo = {};
  
  for (item of array) {
    let [city, population] = item.split(" <-> ");
    population = Number(population);
    
    if (populationInfo[city]) {
      populationInfo[city] += population
    } else {
      populationInfo[city] = population
    }
    
  }
  
  for (const city of Object.keys(populationInfo)) console.log(`${city} : ${populationInfo[city]}`);
}

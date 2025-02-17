function solve(array) {
  const itemInInvetory = (equip) => inventory.includes(equip);
  const getEqupIndex = (equip) => inventory.indexOf(equip)
  //array[0] inventory
  //array[1] commands
  
  //1. create array with inventory and commands
  const inventory = array[0].split(" ");
  const commands = array.slice(1);
  
  //2. loop through commands
  
  for (const item of commands) {
    const [command, equipment] = item.split(" ");
    
    //2.1 Buy {equipment} - add equipment to last position
    if (command === "Buy" && !itemInInvetory(equipment)) {
      inventory.push(equipment)
    }
     //2.2 Trash {equipment} - delete the equipment if it exists
    else if (command === "Trash" && itemInInvetory(equipment)) {
      inventory.splice(getEqupIndex(equipment), 1);
    }
    
    //2.3 Repair {equipment} - you should repair the equipment
    //if it exists and place it in the last position.
    else if (command === "Repair"  && itemInInvetory(equipment)) {
      inventory.push(inventory.splice(getEqupIndex(equipment), 1)[0]);
    }
    
    else {
      
    //2.4	Upgrade {equipment}-{upgrade} - , you should check 
    // if the equipment exists and insert after it the
    // upgrade in the following format: "{equipment}:{upgrade}".
    const [equip, upgrade] = equipment.split("-");
    
      if (itemInInvetory(equip)) {
        
        inventory.splice(getEqupIndex(equip) + 1, 0, `${equip}:${upgrade}`)
      }
   
    }
  }
    
  console.log(inventory.join(" "))
}

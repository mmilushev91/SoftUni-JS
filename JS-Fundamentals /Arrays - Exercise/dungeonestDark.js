function solve(commandsString) {
  const commandsArray = commandsString.split("|")
  const arrayLength = commandsArray.length;
  
  let health = 100;
  let coins = 0;
  let isDead = false;
  
  for (let i = 0; i < arrayLength; i++) {
    const commandLine = commandsArray[i].split(" ");
    const command = commandLine[0];
    
    if (command === "potion") {
      let healedAmount = Number(commandLine[1]);
        
      if (healedAmount + health > 100) healedAmount = 100 - health;
        
      health += healedAmount;
        
      console.log(`You healed for ${healedAmount} hp.`)
      console.log(`Current health: ${health} hp.`)

    }
    
    else if (command === "chest") {
      let foundCoins = Number(commandLine[1]);
        
      coins += foundCoins;
        
      console.log(`You found ${foundCoins} coins.`)
    } 
    
    else {
      const monsterName = command;
      const monsterAttackPoints = Number(commandLine[1]);
        
      health -= monsterAttackPoints;
        
      if (health <= 0) {
        isDead = true;
          
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
      console.log(`You slayed ${monsterName}.`)
    }   
  }
  
  if (!isDead) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)
  }
  
}

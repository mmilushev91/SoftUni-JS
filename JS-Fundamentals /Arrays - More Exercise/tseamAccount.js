function solve(array) {
  const checkIfInArray = (game) => gameList.includes(game);
  
  const arrayLength = array.length;
  const gameList = array[0].split(" ");
  
  for (let i = 1; i < arrayLength; i++) {
    
    if (array[i] === 'Play!') {
      break;
    }
    const [command, game] = array[i].split(" ");
    
    switch (command) {
      case 'Install':
        
        if (!checkIfInArray(game)) gameList.push(game);
        break;
      
      case "Uninstall":
        if (checkIfInArray(game)) {
          gameList.splice(gameList.indexOf(game) , 1);
        }
        break;
      
      case "Update": {
        if (checkIfInArray(game)) {
          gameList.splice(gameList.indexOf(game) , 1);
          gameList.push(game);
        }
      }
        break;
        
      default:
        
        const [name, expansion] = game.split("-");
        if (checkIfInArray(name)) {
       
        gameList.splice(gameList.indexOf(name) + 1, 0, `${name}:${expansion}`);
        }
    }
  }
  console.log(gameList.join(" ")); 
}

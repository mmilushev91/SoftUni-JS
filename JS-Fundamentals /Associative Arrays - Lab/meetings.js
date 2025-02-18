function solve(array) {
  const meetings = {};
  
  for (const line of array) {
    const [day, name] = line.split(" ");
    
    if (day in meetings) {
      console.log(`Conflict on ${day}!`);
    }
    
    else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (const [key, value] of Object.entries(meetings)) {
    console.log(`${key} -> ${value}`)
  }
}

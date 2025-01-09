function solve(data) {
  const tabs = data[0];
  let salary = data[1];
  const dataLength = data.length;
  
  const penalties = {
  "Facebook":150,
  "Instagram": 100,
  "Reddit":50,
  }
  
  let leftSalary = true;
  
  for (let i = 2; i < dataLength; i++) {
    
    if (data[i] in penalties) {
      salary -= penalties[data[i]];
      
      if (salary <= 0) {
        leftSalary = false;
        console.log("You have lost your salary." );
        break
      }
      
    }
    
  }
  
  if (leftSalary) {
    console.log(salary);
  }
}

solve([3,
500,
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

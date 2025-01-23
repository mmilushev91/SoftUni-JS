function solve(day, age) {
  let price;
  
  if (age >= 0 && age <= 18) {
    switch (day) {
      
      case 'Weekday':
        price = "12$";
        break;
        
      case "Weekend":
        price = "15$";
        break;
      
      default:
        price = "5$";
    }
  } else if (age > 18 && age <= 64) {
    
    switch (day) {
      
      case 'Weekday':
        price = "18$";
        break;
        
      case "Weekend":
        price = "20$";
        break;
      
      default:
        price = "12$";
      }
    } else if (age > 64 && age <= 122) {
      
      switch (day) {
      
      case 'Weekday':
        price = "12$";
        break;
        
      case "Weekend":
        price = "15$";
        break;
      
      default:
        price = "10$";
      }
    } else {
      console.log("Error!")
    }
  
  if (price) console.log(price);
}

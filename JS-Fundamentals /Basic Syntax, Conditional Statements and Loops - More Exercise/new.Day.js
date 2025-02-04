function nextDay(year, month, day) {
  
  const months30 = [4, 6, 9, 11];
  
  function leapYear() {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    
    else {
      return false;
    }
  
  }
  
  let dayLimit;
  
  if (month === 2) {
    if (leapYear()) {
      dayLimit = 29;
    } else {
      dayLimit = 28;
    }
    
  } else if (months30.includes(month)) {
    dayLimit = 30;
    
  } else {
    dayLimit = 31;
  }
  let newDay;
  
  if (day + 1 <= dayLimit) {
    newDay = day + 1;
  } else {
    month += 1;
    
    if (month > 12) {
      month = 1;
      year += 1;
    }
    newDay = 1;
  }

  let date = new Date(`${year}-${month}-${newDay}`);
  
  let outputYear = date.getFullYear();
  let outputMonth = date.getMonth() + 1;
  let outputDate = date.getDate();
  
  let output = `${outputYear}-${outputMonth}-${outputDate}`;
  
  console.log(output);
  
}

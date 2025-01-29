function solve(bookPages, pagesHourly, days) {
  const pagesDaily = bookPages / days;
  const hoursDaily = pagesDaily / pagesHourly;
  
  console.log(hoursDaily);
}

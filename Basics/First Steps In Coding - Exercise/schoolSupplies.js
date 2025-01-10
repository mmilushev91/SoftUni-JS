function solve(pensCount, markersCount, detergentLitters, discountPercent) {
  const penPrice = 5.80;
  const markerPrice = 7.20;
  const detergentPrice = 1.20;
  
  const pensPrice = pensCount * penPrice;
  const markersPrice = markersCount * markerPrice;
  const detergentTotalPrice = detergentLitters * detergentPrice;
  
  const totalPrice = pensPrice + markersPrice + detergentTotalPrice;
  
  const discount = totalPrice * (discountPercent / 100);
  
  const finalPrice = totalPrice - discount;
  
  console.log(finalPrice);
}

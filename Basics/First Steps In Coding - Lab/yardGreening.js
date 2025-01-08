function solve(sq_m) {
  const pricePerM = 7.61;
  const discountPercent = 0.18;
  
  let totalPrice = sq_m * pricePerM;
  let discount = totalPrice * discountPercent;
  let finalPrice = totalPrice - discount;
  
  console.log(`The final price is: ${finalPrice} lv.`)
  console.log(`The discount is: ${discount} lv.`)

}

/**
 * chair---> 3 cft
 * table---> 10 cft
 * bed----->50 cft
*/
function furnitureQunatity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;
  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;

}
const wood = furnitureQunatity(6, 1, 2);
console.log('total wood cft is:', wood);

// task 
/**
 * shirt price --->500
 * pant price ----->300
 * shoe price ------>900
*/
function myEidShopping(shirtQunatity, pantQuantity, shoeQuantity) {
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;
  const shirtTotalPrice = perShirtPrice * shirtQunatity;
  const pantTotalPrice = perPantPrice * pantQuantity;
  const shoeTotalPrice = perShoePrice * shirtQunatity;
  const totalBuyPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
  return totalBuyPrice;
}
const totalBuyPrice = myEidShopping(1, 1, 1);
console.log(totalBuyPrice);
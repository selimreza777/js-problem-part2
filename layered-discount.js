/**
 * first 100 item given you payed 100;
 * second 101-200 item given you payed 90;
 * third above 200 yoe payed 70; 
*/
function layeredDiscountPrice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  }
  else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
  }
  else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }


}
const totalDisPrice = layeredDiscountPrice(201);
console.log('total discount parice:', totalDisPrice);

//----------------new example----------------------------

// // another short example
// // function: কতটা quantity কিনলে total price কত হবে
// function layeredDiscountPrice(quantity) {
//   // ধরি, আমাদের তিন ধাপের দাম আছে
//   const prices = [
//     { limit: 100, price: 100 },    // প্রথম 100 item → 100 টাকা প্রতি
//     { limit: 100, price: 90 },     // পরের 101–200 item → 90 টাকা প্রতি
//     { limit: Infinity, price: 70 } // 200 এর বেশি item → 70 টাকা প্রতি
//   ];

//   let remaining = quantity; // কতটা item বাকি আছে হিসাবের জন্য
//   let total = 0;            // শুরুতে total = 0

//   // প্রতিটি layer এর জন্য loop চালাই
//   for (const layer of prices) {
//     // এই layer এ কত item নেওয়া যাবে, যেটা বাকি আছে তার সাথে তুলনা
//     const itemsInLayer = Math.min(remaining, layer.limit);

//     // layer এর price যোগ করি total এ
//     total += itemsInLayer * layer.price;

//     // যেই item হিসাব করা হলো, তা remaining থেকে বাদ
//     remaining -= itemsInLayer;

//     // যদি আর item বাকি না থাকে, loop বন্ধ
//     if (remaining <= 0) break;
//   }

//   return total; // সব হিসাব শেষে total price return
// }

// // 250 item এর জন্য function কল করা
// const totalDisPrice = layeredDiscountPrice(250);
// console.log('Total discounted price:', totalDisPrice);
//--------------------------------
//  final shortcut example

// function layeredDiscountPrice(quantity) {
//   const prices = [
//     { limit: 100, price: 100 },   // প্রথম 100 item
//     { limit: 100, price: 90 },    // পরের 101–200 item
//     { limit: Infinity, price: 70 } // 200 এর বেশি item
//   ];

//   let remaining = quantity;
//   let total = 0;

//   for (const layer of prices) {
//     const itemsInLayer = Math.min(remaining, layer.limit);
//     total += itemsInLayer * layer.price;
//     remaining -= itemsInLayer;
//     if (remaining <= 0) break;
//   }

//   return total;
// }

// const totalDisPrice = layeredDiscountPrice(250);
// console.log('Total discounted price:', totalDisPrice);


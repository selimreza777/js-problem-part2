const products = [
  { name: 'shampoo', price: 300, quantity: 2 },
  { name: 'fair-n-lavly', price: 100, quantity: 3 },
  { name: 'harpic', price: 95, quantity: 5 },
  { name: 'hand-wash', price: 75, quantity: 1 },
]
function myShopping(products) {
  let total = 0;
  for (const product of products) {
    // const thisProductCost = product.price * product.quantity;
    // total = total + thisProductCost;
    total = total + (product.price * product.quantity); //shortcut 
  }
  return total;
}

const totalShop = myShopping(products);
console.log('total price today:', totalShop);

const numbers = [300, 100, 95, 75];

const products = [
  { name: 'shampoo', price: 300 },
  { name: 'fair-n-lavly', price: 100 },
  { name: 'harpic', price: 95 },
  { name: 'hand-wash', price: 75 },
]
function myShopCut(products) {
  for (const product of products) {
    console.log(product);
  }
}
const getTotal = myShopCut(products);
console.log(getTotal);
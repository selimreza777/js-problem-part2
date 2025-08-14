function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'please provide of a number'
  }
  const mult = num1 * num2;
  return mult;
}
const result = multiply('seven', '3');
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return 'please provide string';
  }
  else if (typeof second !== "string") {
    return "please keybord type string";
  }
  const full = first + ' ' + second;
  return full;
}
const myName = fullName('suzan', 'reza');
// console.log(myName);

function getPrice(product) {
  // if(typeof product.price!=='number'){
  //   return 'please insure number';
  // }
  // console.log(typeof product.color)

  const price = product.price;
  return price;
}
// const price = getPrice({ name: 'chulkani-dandi', price: 20, color: 'black' });
const price = getPrice(5);
// const price =getPrice(12)

function getSecond(number) {
  // এটা চেক করছে 'number' আসলে Array কিনা (true বা false রিটার্ন করবে)
  console.log(Array.isArray(number)); //Array.isArray(number) → চেক করে number আসলেই অ্যারে কি না।

  // Array এর ২য় আইটেম (index 1) বের করছে
  const second = number[1];
  return second;
}
// ফাংশন কল করলাম [54, 55, 45] দিয়ে
const second = getSecond([54, 55, 45]);
console.log(second);
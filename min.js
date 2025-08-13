const price = [20000, 30000, 50000, 100000, 120000, 12000, 35000, 5000];
// max min calculate 
function getMin(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (const price of numbers) {
    if (price < min) {
      min = price;
    }
    if (price > max) {
      max = price;
    }

  }
  return { min, max };
}
const result = getMin(price);
console.log("lowest phone price:", result.min);
console.log("Biggest phone price:", result.max);

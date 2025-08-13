const height = [65, 23, 54, 67, 78, 98, 48, 90, 55, 99, 99.5, 18];
function getMax(numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
const max = getMax(height);
console.log('get max valu', max)

// min calculate 

function smallesMin(numbers) { //function declear smallesMin name
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const minCount = smallesMin(height);
console.log('get min valu:', minCount);
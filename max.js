const disha = 56;
const salman = 75;
if (disha > salman) {
  console.log('disha is greate than salman get strobery');
}
else {
  console.log('salman is greater than disha get strabery');
}
//inside a function
function getNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
const max1 = getNumber(96, 79);
const max2 = getNumber(112, 200)
const ultiMateMax = getNumber(max1, max2);
console.log('max1 and max2 add is:', ultiMateMax)




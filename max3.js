const kim = 165;
const lim = 228;
const dip = 399;

// if (kim > lim && kim > dip) {
//   console.log('kim is the ultimate boss');

// }
// else if (lim > kim && lim > dip) {
//   console.log('lim is ultimate boss');
// }
// else {
//   console.log('dip is ultimate boss');
// }

function whichIsBoss(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  else {
    return num3;
  }
}
const maxNumIs = whichIsBoss(10, 20, 30);
console.log(maxNumIs);

function maxBiggerIs(kim, lim, dip) {
  if (kim > lim && kim > dip) {
    return 'kim is boss';
  }
  else if (lim > kim && lim > dip) {
    return 'lim is boss';
  }
  else {
    return 'dip is boss';
  }

}
const maxBig = maxBiggerIs(115, 16, 99);
console.log(maxBig);


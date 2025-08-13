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


//------short cut max
const max =Math.max(12,20,25,99,200,2000);
console.log('max number Math.max is:', max);

/// array []thakle ...spread use kora lage
const number= [1,4,5, 343,33,3345,34353,333333,999999];
const maxNum = Math.max(...number);
console.log('max numb is use ...spread:',maxNum);


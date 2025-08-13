// onek gula phone ace tar object declear korchi tar min max ber korobo
const mobile = [
  { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
  { name: 'xomi', price: 18000, camera: '8mp', color: 'white' },
  { name: 'shymphony', price: 16000, camera: '6mp', color: 'gold' },
  { name: 'oppo', price: 21000, camera: '13mp', color: 'black' },
  { name: 'itel', price: 26000, camera: '22mp', color: 'red' },
  { name: 'redmi', price: 30000, camera: '22mp', color: 'black' },
]
let min = mobile[0];
let max = mobile[0];
function getChepestPhone(mobiles) {
  for (const mobile of mobiles) {
    if (mobile.price < min.price) {
      min = mobile;

    }
    if (mobile.price > max.price) {
      max = mobile;
    }
  }
  return { max, min };
}
const checp = getChepestPhone(mobile)
console.log('min ph is:', checp.min);
console.log('max phone is:', checp.max);
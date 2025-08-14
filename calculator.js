function add(num1, num2) {
  return num1 + num2;
}
function substraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, operation) {
  if (operation === 'add') {
    const result = add(a, b); //function er vitor theke function k o call kora jai
    return result;
  }
  else if (operation === 'substration') {
    const result = substraction(a, b);
    return result;
  }
  else if (operation === 'multiplication') {
    const result = multiplication(a, b);
    return result;
  }
  else if (operation === 'division') {
    const result = division(a, b);
    return result;
  }
  else {
    return "Only 'add', 'substration','multiplication','division'operation are allowed";
  }

}

const cal = calculator(10, 20, 'add');
console.log('add:', cal);
const cal2 = calculator(20, 10, 'substration');
console.log('sub:', cal2);
const cal3 = calculator(10, 20, 'multiplication');
console.log('multi:', cal3);
const cal4 = calculator(40, 20, 'division');
console.log('div:', cal4);  
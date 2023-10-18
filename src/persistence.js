function persistence(number) {
  if (number < 10) {
    return 0;
  }
  let numArr = number.toString().split('');
  let persistenceIncrement = 0;
  console.log('numArr: ', numArr);
  let result = 0;
  do {
    result = multiply(numArr[0], numArr[1]);
    persistenceIncrement++;
  } while (result > 10);

  let firstMultiple = numArr[0] * numArr[1];
  console.log('firstMultiple: ', firstMultiple);
  if (firstMultiple < 10) {
    return 1;
  } else if (firstMultiple >= 10 && firstMultiple < 19) {
    return 2;
  } else {
    return 3;
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

module.exports = persistence;

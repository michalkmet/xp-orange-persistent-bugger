function persistence(number) {
  if (number < 10) {
    return 0;
  }
  let numArr = number.toString().split('');
  console.log('numArr: ', numArr);
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

module.exports = persistence;

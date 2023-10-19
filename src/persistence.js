function persistence(number) {
  if (number < 10) {
    return 0;
  }
  let numArr = number.toString().split('');
  let persistenceIncrement = 0;
  console.log('numArr: ', numArr);

  let result = number;
  console.log('result1: ', result);
  do {
    result = multiply(result);
    persistenceIncrement++;
    console.log('persistenceIncrement!: ', persistenceIncrement);
    console.log('result!: ', result);
  } while (result >= 10);

  console.log('persistenceIncrementFinal: ', persistenceIncrement);
  return persistenceIncrement;
}

function multiply(nums) {
  console.log('multiply!');
  console.log('nums: ', nums);
  let numsArr = nums.toString().split('');
  console.log('nums: ', numsArr);
  console.log('numsArr.length: ', numsArr.length);
  let multiplicationResult = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    console.log('numsArr[i]: ', numsArr[i]);
    multiplicationResult *= numsArr[i];
    console.log('multiplicationResult!: ', multiplicationResult);
  }
  console.log('multiplicationResult: ', multiplicationResult);
  return multiplicationResult;
}

module.exports = persistence;

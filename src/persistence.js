function persistence(number) {
  if (number < 10) {
    return 0;
  }
  let persistenceIncrement = 0;
  let result = number;
  do {
    result = multiply(result);
    persistenceIncrement++;
  } while (result >= 10);
  return persistenceIncrement;
}

function multiply(nums) {
  let numsArr = nums.toString().split('');
  let multiplicationResult = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    multiplicationResult *= numsArr[i];
  }
  return multiplicationResult;
}

module.exports = persistence;

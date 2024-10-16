// ================== countArray =====================

// Question:
// Given an array of integers, return an array where the first element is the count of positives numbers and the second element is sum of negative numbers.

// ===================================================


const arrayNumber = [5, 9, 14, -7, -3, 2, -1];


//function to count the positive numbers of the array

function countPositive(arrayNumber) {
  return arrayNumber.filter(num => num >= 0).length;
}

const posCount = countPositive(arrayNumber);
console.log(posCount)


//function to sum the negative numbers of the array

function sumNeg(arrayNumber) {
  const negNum = arrayNumber.filter(num => num <0);
  return negNum.reduce ((sum, num) => sum + num, 0);
}

const negativeSum = sumNeg(arrayNumber);
console.log(negativeSum)


//function to return the positive count and negative sum as their own array

function posAndNeg (arrayNumber) {
  const countPositive = arrayNumber.filter(num => num >=0).length;
  const negativeSum = arrayNumber.reduce((sum, num) => num <0 ? sum+num : sum, 0);

  return [countPositive, negativeSum];
}

const result = posAndNeg(arrayNumber);

console.log(result);
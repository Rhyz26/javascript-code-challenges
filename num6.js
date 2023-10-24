//SET 2 NUMBER 1
//Given an integer num,write a function that repeatedly adds all its digits until the result has only one digit, and return it.

//Input: num = 38
//Output: 2
//Explanation: The process is 38 --> 3 + 8 --> 11
//11 --> 1 + 1 --> 2
// since 2 has only one digit, return it. 

function addDigits(num) {
  // If the number is already a single digit, return it.
  if (num < 10) {
    return num;
  }

  // Sum the digits of the number.
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  // Return the sum of the digits, recursively calling the function if the sum is not a single digit.
  return addDigits(sum);
}


const num = 38;

const result = addDigits(num);

console.log(result); // 2

//SET 1 NUMBER ONE

//  Write a function named fizzBuzz that takes in two(2)parameters which are expected to be strings. The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.

//1. write a function named fizzBuzz (takes in two parameters expected to be strings).

//2. function returns "fizz" if the combined length of parameters is divisible by 3
//3. it should also return the string "buzz" if it is divisible by 5
//4. it should also return the string FizzBuzz if divisible by both 5 and 3


//let red = num.length / 5
//let green = num.length / 5 && num.length / 3;



function fizzBuzz(str1, str2) {
  // Get the combined length of the parameters.
  const combinedLength = str1.length + str2.length;

  // Check if the combined length is divisible by 3 and 5.
  if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
    return "FizzBuzz";
  }

  // Check if the combined length is divisible by 3.
  if (combinedLength % 3 === 0) {
    return "Fizz";
  }

  // Check if the combined length is divisible by 5.
  if (combinedLength % 5 === 0) {
    return "Buzz";
  }

  // Otherwise, return the combined length.
  return combinedLength;
}


const str1 = "Hello";
const str2 = "World!";

const result = fizzBuzz(str1, str2);

console.log(result); // "FizzBuzz"


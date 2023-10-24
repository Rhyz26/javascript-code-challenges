//SET 1 NUMBER 4
// Write a function named first Palindrome which takes a parameter: words. Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

//input: words = ['abc', "car", "ada", "racecar", "cool"]
//output: "ada"

   
function firstPalindrome(words) {
  // Iterate over the array and check if each string is a palindrome.
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  // If no palindrome is found, return an empty string.
  return "";
}

// Check if a string is a palindrome.
function isPalindrome(string) {
  // Convert the string to lowercase.
  string = string.toLowerCase();

  // Reverse the string.
  const reversedString = string.split("").reverse().join("");

  // Return true if the original string and the reversed string are equal, false otherwise.
  return string === reversedString;
}

const words = ["abc", "car", "ada", "racecar", "cool"];

const result = firstPalindrome(words);

console.log(result); // "ada"



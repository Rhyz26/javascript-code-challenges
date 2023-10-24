//SET 2 NUMBER 5
//Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

//Example 1
//input strs = ["flower", "flow", "flight"]
//output: "fl"

//Example 2
//input strs = ["dog", "racecar", "car"]
//Explanation: There is no common prefix among the input strings

function findLongestCommonPrefix(strs) {
  // Check if the input is valid.
  if (!strs || strs.length === 0) {
    return "";
  }

  // Sort the array of strings in alphabetical order.
  strs.sort();

  // Get the first and last strings in the sorted array.
  const firstString = strs[0];
  const lastString = strs[strs.length - 1];

  // Find the longest common prefix of the first and last strings.
  let prefix = "";
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === lastString[i]) {
      prefix += firstString[i];
    } else {
      break;
    }
  }

  // Return the longest common prefix.
  return prefix;
}

const strs = ["flower", "flow", "flight"];
const longestCommonPrefix = findLongestCommonPrefix(strs);

console.log(longestCommonPrefix); // "fl"

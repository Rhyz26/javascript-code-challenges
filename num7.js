//SET 2 NUMBER 2

//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1];
//Output: true

//Example 2
//Input: nums = [1,2,3,4]
//Output: false

function containsDuplicates(nums) {
  // Create a set to store the unique elements of the array.
  const set = new Set();

  // Iterate over the array and add each element to the set.
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }

  // If no duplicates are found, return false.
  return false;
}

const nums = [1, 2, 3, 1];

const result = containsDuplicates(nums);

console.log(result); // true

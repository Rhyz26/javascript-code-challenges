//SET 2 NUMBER 4

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//example 1
//input: nums = [2,2,1]
//output: 1 
//Example 2 
//input: nums = [4,1,2,1,2]
//output: 4 

function findSingleElement(nums) {
  // Create a set to store the elements that appear twice.
  const twiceSet = new Set();

  // Iterate over the array and add each element to the set.
  for (const num of nums) {
    if (twiceSet.has(num)) {
      // If the element is already in the set, remove it.
      twiceSet.delete(num);
    } else {
      // If the element is not in the set, add it.
      twiceSet.add(num);
    }
  }

  // The only element left in the set is the element that appears once.
  return [...twiceSet][0];
}

const nums = [4, 1, 2, 1, 2];
const singleElement = findSingleElement(nums);

console.log(singleElement); // 4

//SET 2 No. 3
// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  Example 1
//  input: nums = [3,2,3]
//  output: 3

// Example 2
// iput: nums = [2,2,1,1,1,2,2]
// output: 2



function findMajorityElement(nums) {
  // Create a map to store the frequency of each element in the array.
  const frequencyMap = new Map();

  // Iterate over the array and update the frequency map.
  for (const num of nums) {
    const frequency = frequencyMap.get(num) || 0;
    frequencyMap.set(num, frequency + 1);
  }

  // Find the element with the highest frequency.
  let majorityElement = null;
  let maxFrequency = 0;
  for (const [num, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
      majorityElement = num;
      maxFrequency = frequency;
    }
  }

  
  return majorityElement;
}

const nums = [3, 2, 3];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); 




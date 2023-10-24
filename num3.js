// SET 1 NUMBER 3

// Write a function named twoSum which takes two parameters: nums and target. Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to the target
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// .


//1. a function named twoSum, it takes two parameters, nums and target
//given an array of integer nums and integer targets
//return indices of the two numbers such that they add up to the target
//you may assume that each input would have exactly one solution and u may not use the same element twice
//return the answer in any order 

//input: nums = [2,7,11,15], target = 9
//output: [0,1]
//explanation because nums[0] + nums[1]==9, we return [0,1]

//example 2
//input: nums=[3,2,4], target = 6
//output: [1,2]



function twoSum(nums, target) {
  // Create a map to store the indices of the numbers in the array.
  const map = new Map();

  // Iterate over the array and add each element to the map, along with its index.
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Iterate over the array again and look for the complement of each element in the map.
  // If the complement is found, return the indices of the two elements.
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  // If no two numbers in the array add up to the target, return an empty array.
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);

console.log(result); // [0, 1]

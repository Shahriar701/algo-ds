/**
 * 
 * Given an array of integers nums and an integer target, return indices of two numbers in the array such that 
 * they add up to target. You may assume that each input has exactly one solution, and you cannot use 
 * the same element twice.
 * 
 */

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

const testCases = [
  { nums: [2, 7, 11, 15], target: 9 }, // Should return [0, 1]
  { nums: [3, 2, 4], target: 6 }, // Should return [1, 2]
  { nums: [3, 3], target: 6 }, // Should return [0, 1]
  { nums: [1, 5, 8, 3], target: 11 }, // Should return [1, 2]
  { nums: [1, 2, 3, 4, 5], target: 9 }, // Should return [3, 4]
];

console.log("\nTesting Optimized Solution:");
testCases.forEach((test) => {
  console.log(
    `Input: nums = [${test.nums}], target = ${test.target}`,
    `Output:`,
    twoSum(test.nums, test.target)
  );
});

// Brute Force Solution - O(n²)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // No solution found
}

// Optimized Solution using Hash Map - O(n)
function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we've seen the complement before, we found our pair
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // Store current number and its index
    numMap.set(nums[i], i);
  }

  return []; // No solution found
}

// Test cases
const testCases = [
  { nums: [2, 7, 11, 15], target: 9 }, // Should return [0, 1]
  { nums: [3, 2, 4], target: 6 }, // Should return [1, 2]
  { nums: [3, 3], target: 6 }, // Should return [0, 1]
  { nums: [1, 5, 8, 3], target: 11 }, // Should return [1, 2]
  { nums: [1, 2, 3, 4, 5], target: 9 }, // Should return [3, 4]
];

console.log("Testing Brute Force Solution:");
testCases.forEach((test) => {
  console.log(
    `Input: nums = [${test.nums}], target = ${test.target}`,
    `Output:`,
    twoSumBruteForce(test.nums, test.target)
  );
});

console.log("\nTesting Optimized Solution:");
testCases.forEach((test) => {
  console.log(
    `Input: nums = [${test.nums}], target = ${test.target}`,
    `Output:`,
    twoSum(test.nums, test.target)
  );
});

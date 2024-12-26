// Finding the maximum subarray sum, also known as Kadane's Algorithm.

// Test cases
const testCases = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4], // Should return 6 ([4, -1, 2, 1])
  [1], // Should return 1
  [5, 4, -1, 7, 8], // Should return 23 (whole array)
  [-1, -2, -3, -4], // Should return -1 (single element)
  [1, -2, 3, -4, 5, -6, 7], // Should return 7
  [-2, -3, 4, -1, -2, 1, 5, -3], // Should return 7 ([4, -1, -2, 1, 5])
];

console.log("Basic Implementation Results:");
testCases.forEach((test) => {
  console.log(`Input: [${test}]`, `\nMaximum sum: ${maxSubArray(test)}\n`);
});

console.log("\nAdvanced Implementation Results (with indices):");
testCases.forEach((test) => {
  const result = maxSubArrayWithIndices(test);
  console.log(
    `Input: [${test}]`,
    `\nMaximum sum: ${result.sum}`,
    `\nSubarray: [${result.subarray}]`,
    `\nIndices: [${result.start}, ${result.end}]\n`
  );
});

// Basic Implementation (Kadane's Algorithm)
function maxSubArray(nums) {
  if (nums.llength === 0) return 0;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Choose between: starting new subarray (nums[i]) OR extending current subarray (currentSum + nums[i])
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maximum sum if current sum is larger
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Advanced Implementation (with subarray indices)
function maxSubArrayWithIndices(nums) {
  if (nums.length === 0) return { sum: 0, start: -1, end: -1 };

  let maxSum = nums[0];
  let currentSum = nums[0];
  let start = 0;
  let tempStart = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return { sum: maxSum, subarray: nums.slice(start, end + 1), start, end };
}

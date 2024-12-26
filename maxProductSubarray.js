function maxProductSubarray(nums) {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let currentMax = nums[0]; // Keep track of max product ending here
  let currentMin = nums[0]; // Keep track of min product ending here

  for (let i = 1; i < nums.length; i++) {
    // Need to keep both max and min because of negative numbers
    const temp = currentMax;

    // Current number might be bigger than product with it
    currentMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);

    // Also track minimum product for negative numbers
    currentMin = Math.min(nums[i], nums[i] * temp, nums[i] * currentMin);

    maxProduct = Math.max(maxProduct, currentMax);
  }

  return maxProduct;
}

// Test all solutions
const tests = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  [-1, -2, -3, -4], // All negative
  [2, 3, -2, 4, -1], // For product
  [-2, 0, -1], // With zero
];

console.log("Testing with regular arrays:");
tests.forEach((test) => {
  console.log(`\nInput: [${test}]`);
  console.log("Regular sum:", maxSubArrayWithSubarray(test));
  console.log("Handling negatives:", maxSubArrayNegative(test));
  console.log("Max product:", maxProductSubarray(test));
});

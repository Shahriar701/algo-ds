function maxSubArrayNegative(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  // Handle all negative case specially
  let maxElement = Math.max(...nums);
  if (maxElement < 0) {
    return {
      sum: maxElement,
      index: nums.indexOf(maxElement),
    };
  }

  // Regular Kadane's for other cases
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return { sum: maxSum };
}

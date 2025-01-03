function threeSumTarget(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test cases
const testCases = [
  [-1, 0, 1, 2, -1, -4], // Standard case
  [0, 0, 0, 0], // Duplicates
  [-2, 0, 1, 1, 2], // Multiple solutions
  [1, 2, -2, -1], // No solutions
  [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4], // Larger case
];

console.log("\nTesting Three Sum with target = 5:");
testCases.forEach((test) => {
  console.log(`\nInput: [${test}]`);
  console.log("Output:", threeSumTarget(test, 5));
});

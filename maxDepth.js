function findMaxDepth(s) {
  let currentDepth = 0;
  let maxDepth = 0;

  for (let char of s) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === ")") {
      if (currentDepth === 0) return -1; // Invalid expression
      currentDepth--;
    }
  }

  // If currentDepth isn't 0, we have unclosed parentheses
  return currentDepth === 0 ? maxDepth : -1;
}

// Test cases
const testCases3 = [
  "()", // 1
  "(())", // 2
  "((()))", // 3
  "((()()))", // 3
  ")", // -1 (invalid)
  "(()())", // 2
  "(()", // -1 (invalid)
];

console.log("\nTesting maximum nesting depth:");
testCases3.forEach((test) => {
  console.log(`Input: "${test}" -> Output: ${findMaxDepth(test)}`);
});

// Bonus: Combined function that returns both validity and depth
function analyzeParentheses(s) {
  let currentDepth = 0;
  let maxDepth = 0;
  const stack = [];

  for (char of s) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);

      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return { isValid: false, depth: -1 };
      }
      stack.pop();
      currentDepth--;
    }
  }

  return {
    isValid: stack.length === 0,
    depth: stack.length === 0 ? maxDepth : -1,
  };
}

console.log("\nTesting combined analysis:");
testCases3.forEach((test) => {
  const result = analyzeParentheses(test);
  console.log(
    `Input: "${test}" -> Valid: ${result.isValid}, Depth: ${result.depth}`
  );
});

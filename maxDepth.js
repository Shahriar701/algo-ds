function analyzeParentheses(s) {
  let currentDepth = 0;
  let maxDepth = 0;
  const stack = [];

  for (let char of s) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) return { isValid: false, depth: -1 };
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

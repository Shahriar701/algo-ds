function isValidMathExpression(expr) {
  const stack = [];

  for (let char of expr) {
    // Only care about parentheses, ignore other characters
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      // If we find closing parenthesis without matching opening
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
    // Ignore all other characters (numbers, operators, spaces)
  }

  // Expression is valid if all parentheses are matched
  return stack.length === 0;
}

// Test cases
const testCases2 = [
  "2 * (3 + 4)", // true
  "(2 + 3) * (4 + 5)", // true
  "2 + 3)", // false
  "((2 + 3) * 4", // false
  "(2 + (3 * 4))", // true
  "2 + 3", // true (no parentheses is valid)
  ")2 + 3(", // false
];

console.log("\nTesting mathematical expressions:");
testCases2.forEach((test) => {
  console.log(`Input: "${test}" -> Output: ${isValidMathExpression(test)}`);
});

function isValid(s) {
  // Stack to keep track of opening brackets
  const stack = [];

  // Map of closing brackets to their corresponding opening brackets
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate through each character in the string
  for (let char of s) {
    // If it's a closing bracket
    if (bracketMap[char]) {
      // Pop the last opening bracket from stack
      // If stack is empty OR the popped bracket doesn't match, return false
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push to stack
      stack.push(char);
    }
  }

  // Return true only if stack is empty (all brackets were matched)
  return stack.length === 0;
}

// Test cases
const testCases = [
  "()", // true
  "()[]{}", // true
  "(]", // false
  "([)]", // false
  "{[]}", // true
  "(", // false
  "}", // false
  "((()))", // true
];

testCases.forEach((test) => {
  console.log(`Input: "${test}" -> Output: ${isValid(test)}`);
});

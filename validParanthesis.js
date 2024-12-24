// Write a function that takes a string containing just the characters 
// '(', ')', '{', '}', '[' and ']', and determine if the input string is valid.

function isValid(s) {
  const stack = [];

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (bracketMap[char]) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0
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

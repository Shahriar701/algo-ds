/**
 * Given the root of a binary tree, determine if it's a valid binary search tree (BST)
 */

// Node class for creating BST nodes
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Solution 1: Using Min-Max Range
function isValidBST(root) {
  // Helper function that checks if node value is within valid range
  function isValidNode(node, min, max) {
    // Empty node is valid
    if (node === null) return true;

    // Check if current node's value is within range
    if (node.val <= min || node.val >= max) return false;

    // Check left subtree (must be less than current node)
    // Check right subtree (must be greater than current node)
    return (
      isValidNode(node.left, min, node.val) &&
      isValidNode(node.right, node.val, max)
    );
  }

  return isValidNode(root, -Infinity, Infinity);
}

// Solution 2: Using Inorder Traversal
function isValidBSTInorder(root) {
  let prevValue = -Infinity;

  function inorder(node) {
    if (node === null) return true;

    // Check left subtree
    if (!inorder(node.left)) return false;

    // Check current node
    if (node.val <= prevValue) return false;
    prevValue = node.val;

    // Check right subtree
    return inorder(node.right);
  }

  return inorder(root);
}

// Helper function to create a BST from array
function createBST(values) {
  if (!values.length) return null;

  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < values.length) {
    const node = queue.shift();

    // Add left child
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i]);
      queue.push(node.left);
    }
    i++;

    // Add right child
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Test cases
const testCases = [
  [2, 1, 3], // Valid BST
  [5, 1, 4, null, null, 3, 6], // Invalid BST
  [5, 4, 6, null, null, 3, 7], // Invalid BST (3 < 5)
  [2, 2, 2], // Invalid BST (duplicates)
  [], // Empty tree (valid)
  [1], // Single node (valid)
];

console.log("Testing BST Validation:");
testCases.forEach((test, index) => {
  const root = createBST(test);
  console.log(`\nTest Case ${index + 1}: [${test}]`);
  console.log("Using Min-Max Range:", isValidBST(root));
  console.log("Using Inorder Traversal:", isValidBSTInorder(root));
});

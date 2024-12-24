function sortArray(arr) {
  return arr.sort((a, b) => {
    // Compare by priority first
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }

    // If priorities are equal, compare by timestamp
    if (a.timestamp !== b.timestamp) {
      return a.timestamp - b.timestamp;
    }

    // If both are equal, sort by id alphabetically
    return a.id.localeCompare(b.id);
  });
}

// Example usage:
const inputArray = [
  { id: "c", priority: 3, timestamp: 1000 },
  { id: "a", priority: 1, timestamp: 2000 },
  { id: "b", priority: 1, timestamp: 1000 },
  { id: "d", priority: 2, timestamp: 1500 },
];

console.log("Input array:", inputArray);
console.log("Sorted array:", sortArray(inputArray));

const inputArray = [
  { id: "cbt", priority: 3, timestamp: 1000 },
  { id: "sss", priority: 1, timestamp: 2000 },
  { id: "bgh", priority: 1, timestamp: 1000 },
  { id: "asd", priority: 2, timestamp: 1500 },
];

function sortArray(arr) {
  return arr.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }

    if (a.timestamp !== b.timestamp) {
      return a.timestamp - b.timestamp;
    }

    return a.id.localeCompare(b.id);
  });
}

console.log("Input array:", inputArray);
console.log("Sorted array:", sortArray(inputArray));

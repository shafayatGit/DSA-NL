const arr = ["apple", "banana", "orange", "grape", "banana", "kiwi", "apple"];

// Brute-force method to remove duplicates
function removeDuplicatesBruteForce(array) {
  const result = [];
  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(removeDuplicatesBruteForce(arr)); // Output: [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

// Using Set to remove duplicates
function removeDuplicatesUsingSet(array) {
  return Array.from(new Set(array));
}
console.log(removeDuplicatesUsingSet(arr)); // Output: [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

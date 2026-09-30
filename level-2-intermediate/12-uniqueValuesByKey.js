/**
 * Problem 12: Extract Unique Values by Key
 *
 * Description:
 * Write a function that takes an array of objects and a key name,
 * and returns an array of unique values found for that key across all objects.
 * Exclude undefined or missing keys.
 *
 * Example:
 * const data = [
 *   { id: 1, tag: "tech" },
 *   { id: 2, tag: "news" },
 *   { id: 3, tag: "tech" },
 *   { id: 4, tag: "lifestyle" }
 * ];
 * uniqueValuesByKey(data, "tag"); // ["tech", "news", "lifestyle"]
 */

function uniqueValuesByKey(arr, key) {
  // TODO: Implement your solution here
  const result = new Set()
  for(let item of arr){
    if(item[key]){
      result.add(item[key])
    }
  }
  return [...result]
}

// Test cases
const data = [
  { id: 1, tag: "tech" },
  { id: 2, tag: "news" },
  { id: 3, tag: "tech" },
  { id: 4, tag: "lifestyle" },
  { id: 5 }
];

console.log(uniqueValuesByKey(data, "tag"));
// Expected: ["tech", "news", "lifestyle"]

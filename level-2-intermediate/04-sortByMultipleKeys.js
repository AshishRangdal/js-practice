/**
 * Problem 04: Sort Array of Objects by Multiple Keys
 *
 * Description:
 * Write a function that sorts an array of objects by multiple fields.
 * Each criteria specifies a key and order ('asc' | 'desc').
 *
 * Example:
 * const users = [
 *   { name: "John", age: 30 },
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Alice", age: 22 }
 * ];
 * // Sort primarily by name ('asc'), secondarily by age ('desc')
 */

function sortByMultipleKeys(arr, criteria) {
  // TODO: Implement your solution here
}

// Test cases
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 22 }
];

console.log(sortByMultipleKeys(users, [
  { key: "name", order: "asc" },
  { key: "age", order: "desc" }
]));
// Expected: [
//   { name: 'Alice', age: 25 },
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 30 },
//   { name: 'John', age: 30 }
// ]

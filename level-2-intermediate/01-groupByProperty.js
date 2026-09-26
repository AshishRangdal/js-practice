/**
 * Problem 01: Group Array of Objects by Property
 *
 * Description:
 * Write a function that groups an array of objects by a specified property key.
 * Return an object where each key is a unique value of that property, and the value is an array of objects.
 *
 * Example:
 * Input:
 *   const people = [
 *     { name: "Alice", role: "admin" },
 *     { name: "Bob", role: "user" },
 *     { name: "Charlie", role: "admin" }
 *   ];
 *   groupBy(people, "role");
 * Output:
 *   {
 *     admin: [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }],
 *     user: [{ name: "Bob", role: "user" }]
 *   }
 */

function groupBy(arr, key) {
  // TODO: Implement your solution here
}

// Test cases
const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "guest" }
];

console.log(groupBy(people, "role"));
// Expected:
// {
//   admin: [ { name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' } ],
//   user: [ { name: 'Bob', role: 'user' } ],
//   guest: [ { name: 'David', role: 'guest' } ]
// }

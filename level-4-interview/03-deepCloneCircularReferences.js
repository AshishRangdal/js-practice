/**
 * Problem 03: Deep Clone with Circular Reference Handling
 *
 * Description:
 * Implement a robust deep clone function `deepCloneWithCircular(obj)` that can handle
 * circular references without falling into infinite recursion or stack overflow errors.
 * Use a `WeakMap` or `Map` to track visited object references.
 */

function deepCloneWithCircular(obj, hash = new WeakMap()) {
  // TODO: Implement your solution here
}

// Test cases
const user = { name: "Alex" };
user.self = user; // Circular reference
user.friends = [user];

const clonedUser = deepCloneWithCircular(user);

console.log("Is different instance:", clonedUser !== user); // Expected: true
console.log("Circular reference preserved:", clonedUser.self === clonedUser); // Expected: true
console.log("Nested circular preserved:", clonedUser.friends[0] === clonedUser); // Expected: true

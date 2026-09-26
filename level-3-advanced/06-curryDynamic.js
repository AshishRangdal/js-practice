/**
 * Problem 06: Dynamic Currying for Arbitrary Arity
 *
 * Description:
 * Implement a general currying function `curry(fn)` that converts a function with N arguments
 * into a series of unary / partial functions until all N arguments are collected.
 *
 * Example:
 * const sum = (a, b, c, d) => a + b + c + d;
 * const curriedSum = curry(sum);
 * curriedSum(1)(2)(3)(4); // 10
 * curriedSum(1, 2)(3, 4); // 10
 * curriedSum(1)(2, 3, 4); // 10
 */

function curry(fn) {
  // TODO: Implement your solution here
}

// Test cases
const multiply = (a, b, c, d) => a * b * c * d;
const curried = curry(multiply);

console.log(curried(2)(3)(4)(5)); // Expected: 120
console.log(curried(2, 3)(4, 5)); // Expected: 120
console.log(curried(2)(3, 4, 5)); // Expected: 120
console.log(curried(2, 3, 4, 5)); // Expected: 120

/**
 * Problem 20: Basic Fixed-Arity Currying (3 arguments)
 *
 * Description:
 * Implement a currying function `curry3(fn)` for functions that take exactly 3 arguments.
 * It should allow calling like:
 * - f(a)(b)(c)
 * - f(a, b)(c)
 * - f(a)(b, c)
 * - f(a, b, c)
 */

function curry3(fn) {
  // TODO: Implement your solution here
}

// Test cases
const sumThree = (a, b, c) => a + b + c;
const curriedSum = curry3(sumThree);

console.log(curriedSum(1)(2)(3)); // Expected: 6
console.log(curriedSum(1, 2)(3)); // Expected: 6
console.log(curriedSum(1)(2, 3)); // Expected: 6
console.log(curriedSum(1, 2, 3)); // Expected: 6

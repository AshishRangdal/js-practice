/**
 * Problem 24: Currying with Lodash-Style Placeholder Support
 *
 * Description:
 * Implement a currying function `curryWithPlaceholder(fn)` that supports a placeholder symbol `_`.
 *
 * Example:
 * const fn = (a, b, c) => [a, b, c];
 * const curried = curryWithPlaceholder(fn);
 * const _ = curryWithPlaceholder._;
 *
 * curried(1, 2, 3); // [1, 2, 3]
 * curried(_, 2)(1, 3); // [1, 2, 3]
 * curried(_, _, 3)(1)(2); // [1, 2, 3]
 */

function curryWithPlaceholder(fn) {
  // TODO: Implement your solution here
}
curryWithPlaceholder._ = Symbol("curry_placeholder");

// Test cases
const _ = curryWithPlaceholder._;
const format = (a, b, c) => `${a}-${b}-${c}`;
const curriedFormat = curryWithPlaceholder(format);

console.log(curriedFormat(1, 2, 3)); // Expected: "1-2-3"
console.log(curriedFormat(_, 2, 3)(1)); // Expected: "1-2-3"
console.log(curriedFormat(_, _, 3)(1)(2)); // Expected: "1-2-3"
console.log(curriedFormat(_, 2)(_, 3)(1)); // Expected: "1-2-3"

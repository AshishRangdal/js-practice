/**
 * Problem 21: Once Function Wrapper
 *
 * Description:
 * Write a higher-order function `once(fn)` that returns a function that can be called at most once.
 * Subsequent calls should return the result of the first invocation.
 *
 * Example:
 * const init = once((x) => x * 2);
 * init(10); // 20
 * init(20); // 20
 */

function once(fn) {
  // TODO: Implement your solution here
  return function(...args) {
    if (!fn.called) {
      fn.called = true;
      fn.result = fn(...args);
    }
    return fn.result;
  };
}

// Test cases
let executionCount = 0;
const processPayment = once((amount) => {
  executionCount++;
  return `Paid $${amount}`;
});

console.log(processPayment(100)); // Expected: "Paid $100"
console.log(processPayment(200)); // Expected: "Paid $100"
console.log("Execution count:", executionCount); // Expected: 1

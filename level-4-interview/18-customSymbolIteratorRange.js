/**
 * Problem 18: Custom Iterable Collections with Symbol.iterator
 *
 * Description:
 * 1. Implement a class `Range(from, to, step = 1)` that is directly iterable using `for...of`
 *    and spread operator `[...new Range(1, 5)]` by implementing `[Symbol.iterator]`.
 * 2. Implement an infinite fibonacci generator iterator utility `fibonacciGenerator()`.
 */

class Range {
  constructor(from, to, step = 1) {
    // TODO: Implement your solution here
  }

  [Symbol.iterator]() {
    // TODO: Implement your solution here
  }
}

function* fibonacciGenerator() {
  // TODO: Implement your solution here
}

// Test cases
console.log([...new Range(1, 5)]); // Expected: [1, 2, 3, 4, 5]
console.log([...new Range(0, 10, 2)]); // Expected: [0, 2, 4, 6, 8, 10]

const fib = fibonacciGenerator();
const first5Fib = [fib.next().value, fib.next().value, fib.next().value, fib.next().value, fib.next().value];
console.log("First 5 Fibonacci:", first5Fib); // Expected: [0, 1, 1, 2, 3]

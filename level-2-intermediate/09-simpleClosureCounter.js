/**
 * Problem 09: Encapsulated Counter with Closures
 *
 * Description:
 * Create a function `createCounter(initialValue)` that encapsulates private state using closures.
 * It should return an object with four methods:
 * - `increment()`: increases counter by 1 and returns current value
 * - `decrement()`: decreases counter by 1 and returns current value
 * - `reset()`: resets counter to initialValue and returns it
 * - `getValue()`: returns current counter value
 */

function createCounter(initialValue = 0) {
  // TODO: Implement your solution here
  let counter = initialValue;
  function getValue() {
    return counter;
  }
  function increment() {
    return ++counter;
  }
  function decrement() {
    return --counter;
  }
  function reset() {
    counter = initialValue;
    return counter;
  }
  return {
    getValue,
    increment,
    decrement,
    reset,
  };
}

// Test cases
const counter = createCounter(5);
console.log(counter.getValue()); // Expected: 5
console.log(counter.increment()); // Expected: 6
console.log(counter.increment()); // Expected: 7
console.log(counter.decrement()); // Expected: 6
console.log(counter.reset()); // Expected: 5
console.log(counter.getValue()); // Expected: 5

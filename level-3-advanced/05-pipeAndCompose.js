/**
 * Problem 05: Pipe and Compose Utilities
 *
 * Description:
 * Implement two functional programming composition utilities:
 * 1. `pipe(...fns)`: Left-to-right function composition.
 *    pipe(f, g, h)(x) executes f(x), then passes result to g, then to h: h(g(f(x))).
 * 2. `compose(...fns)`: Right-to-left function composition.
 *    compose(f, g, h)(x) executes h(x), then passes result to g, then to f: f(g(h(x))).
 */

function pipe(...fns) {
  // TODO: Implement your solution here
}

function compose(...fns) {
  // TODO: Implement your solution here
}

// Test cases
const add5 = (x) => x + 5;
const double = (x) => x * 2;
const square = (x) => x * x;

const pipeFn = pipe(add5, double, square);
console.log(pipeFn(2)); // (2 + 5) = 7 -> 7 * 2 = 14 -> 14^2 = 196. Expected: 196

const composeFn = compose(square, double, add5);
console.log(composeFn(2)); // (2 + 5) = 7 -> 7 * 2 = 14 -> 14^2 = 196. Expected: 196

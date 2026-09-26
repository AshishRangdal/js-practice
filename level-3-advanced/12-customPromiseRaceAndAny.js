/**
 * Problem 12: Polyfill for Promise.race and Promise.any
 *
 * Description:
 * Implement custom versions of:
 * 1. `promiseRace(promises)`: Returns a promise that fulfills or rejects as soon as any of the promises fulfills or rejects.
 * 2. `promiseAny(promises)`: Resolves with the first fulfilled promise value.
 *    If all promises reject, rejects with an `AggregateError` containing all rejection reasons.
 */

function promiseRace(promises) {
  // TODO: Implement your solution here
}

function promiseAny(promises) {
  // TODO: Implement your solution here
}

// Test cases
const slow = new Promise((res) => setTimeout(() => res("slow"), 100));
const fast = new Promise((res) => setTimeout(() => res("fast"), 20));

promiseRace([slow, fast]).then((winner) => {
  console.log("Race winner:", winner); // Expected: "fast"
});

const reject1 = Promise.reject("err 1");
const reject2 = Promise.reject("err 2");
const pass = new Promise((res) => setTimeout(() => res("any pass"), 50));

promiseAny([reject1, pass, reject2]).then((res) => {
  console.log("Any resolved:", res); // Expected: "any pass"
});

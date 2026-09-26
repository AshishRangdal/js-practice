/**
 * Problem 04: Custom Generator-Based Async/Await Engine (co Runner)
 *
 * Description:
 * Before `async/await` was natively supported in ES2017, generators (`function*`) and promises
 * were combined to yield asynchronous execution flow.
 *
 * Implement `runAsyncGenerator(generatorFunction)` that executes a generator function yielding
 * promises step-by-step until completion, returning a Promise that resolves with the generator's return value.
 */

function runAsyncGenerator(generatorFn) {
  // TODO: Implement your solution here
}

// Test cases
const fetchNum = (n, delay) => new Promise((res) => setTimeout(() => res(n), delay));

function* testGenerator() {
  const a = yield fetchNum(10, 50);
  const b = yield fetchNum(20, 50);
  const c = yield fetchNum(30, 50);
  return a + b + c;
}

runAsyncGenerator(testGenerator).then((result) => {
  console.log("Generator finished with result:", result); // Expected: 60 (10 + 20 + 30)
});

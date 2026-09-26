/**
 * Problem 24: Method Chaining Calculator with Deferred Execution
 *
 * Description:
 * Build a calculator function/class `calculator(initialValue)` supporting chained math operations:
 * - `.add(n)`
 * - `.subtract(n)`
 * - `.multiply(n)`
 * - `.divide(n)`
 * - `.result()`: returns the calculated result
 * - `.reset()`: resets value back to 0
 */

function calculator(initialValue = 0) {
  // TODO: Implement your solution here
}

// Test cases
const calc = calculator(10);
const res = calc.add(5).multiply(2).subtract(6).divide(4).result();
console.log("Result:", res); // ((10 + 5) * 2 - 6) / 4 = 24 / 4 = 6. Expected: 6

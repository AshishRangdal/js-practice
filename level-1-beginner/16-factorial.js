/**
 * Problem 16: Factorial of a Number
 *
 * Description:
 * Write a function that calculates the factorial of a non-negative integer n (n!).
 * 0! = 1, 1! = 1, 5! = 5 * 4 * 3 * 2 * 1 = 120.
 *
 * Example:
 * Input: 5 -> Output: 120
 * Input: 0 -> Output: 1
 */

function factorial(n) {
  // TODO: Implement your solution here

  // Base case
  if(n == 0 || n==1) return 1;

  // 1 approach recursive
  // return (n) * factorial(n-1);

  // 2 approach iterative
  let fact = 1;
  for(let i=1;i<=n;i++){
    fact = fact * i
  }
  return fact
}

// Test cases
console.log(factorial(0)); // Expected: 1
console.log(factorial(1)); // Expected: 1
console.log(factorial(5)); // Expected: 120
console.log(factorial(6)); // Expected: 720

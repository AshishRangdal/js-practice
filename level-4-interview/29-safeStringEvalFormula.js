/**
 * Problem 29: Safe Arithmetic Expression Evaluator (Shunting Yard / AST)
 *
 * Description:
 * Write a function `evaluateExpression(expr, variables)` that safely evaluates a mathematical
 * expression string containing numbers, basic operators (`+`, `-`, `*`, `/`), parentheses `()`,
 * and named variables.
 *
 * DO NOT use `eval()` or `new Function()`.
 *
 * Example:
 * evaluateExpression("3 + 5 * (2 - 8)") -> 3 + 5 * (-6) = -27
 * evaluateExpression("price * (1 - discount)", { price: 100, discount: 0.2 }) -> 80
 */

function evaluateExpression(expr, variables = {}) {
  // TODO: Implement your solution here
}

// Test cases
console.log(evaluateExpression("3 + 5 * (2 - 8)")); // Expected: -27
console.log(evaluateExpression("10 + 20 / 4 * 2")); // Expected: 20 (10 + 5 * 2 = 20)
console.log(evaluateExpression("price * (1 - discount)", { price: 100, discount: 0.2 })); // Expected: 80

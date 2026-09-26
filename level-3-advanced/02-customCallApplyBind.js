/**
 * Problem 02: Polyfills for Function call, apply, and bind
 *
 * Description:
 * Implement custom versions of call, apply, and bind on Function.prototype:
 * - `Function.prototype.myCall(context, ...args)`
 * - `Function.prototype.myApply(context, argsArray)`
 * - `Function.prototype.myBind(context, ...args)`
 *
 * Requirements:
 * - `context` can be null/undefined (defaults to global/window object) or primitive (converted to object wrapper).
 * - Avoid permanent mutations to `context`.
 * - For `myBind`, support currying (partial arguments applied during bind and during call).
 */

Function.prototype.myCall = function (context, ...args) {
  // TODO: Implement your solution here
};

Function.prototype.myApply = function (context, argsArray = []) {
  // TODO: Implement your solution here
};

Function.prototype.myBind = function (context, ...args) {
  // TODO: Implement your solution here
};

// Test cases
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const user = { name: "Emma" };

console.log(greet.myCall(user, "Hello", "!")); // Expected: "Hello, Emma!"
console.log(greet.myApply(user, ["Hi", "?"])); // Expected: "Hi, Emma?"
const bound = greet.myBind(user, "Welcome");
console.log(bound(".")); // Expected: "Welcome, Emma."

/**
 * Problem 21: Full Function.prototype.bind Polyfill (handling new operator)
 *
 * Description:
 * Implement a complete polyfill `Function.prototype.myFullBind(thisArg, ...bindArgs)` that handles:
 * 1. Partial argument application (currying).
 * 2. When the bound function is invoked as a constructor using `new BoundFn()`,
 *    the provided `thisArg` is IGNORED, and a new instance of the original constructor is created,
 *    preserving the original prototype chain.
 */

Function.prototype.myFullBind = function (thisArg, ...bindArgs) {
  // TODO: Implement your solution here
};

// Test cases
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function () {
  return `${this.name} is ${this.age} years old`;
};

const BoundPerson = Person.myFullBind(null, "Charlie");
const charlie = new BoundPerson(30);

console.log(charlie.describe()); // Expected: "Charlie is 30 years old"
console.log(charlie instanceof Person); // Expected: true

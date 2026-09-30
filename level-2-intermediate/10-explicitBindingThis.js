/**
 * Problem 10: Explicit Context Binding (call, apply, bind)
 *
 * Description:
 * Fix and utilize explicit `this` binding to invoke methods with different contexts.
 * Write a wrapper function `executeInContext(fn, context, args, methodType)` where
 * methodType is 'call', 'apply', or 'bind', and executes/binds accordingly.
 */

function executeInContext(fn, context, args, methodType) {
  // TODO: Implement your solution here
  
  // 1. Check the methodType and call the appropriate method
  if (methodType === "call") {
    return fn.call(context, ...args);
  } else if (methodType === "apply") {
    return fn.apply(context, args);
  } else if (methodType === "bind") {
    return fn.bind(context, ...args);
  } else {
    throw new Error("Invalid method type. Use 'call', 'apply', or 'bind'.");
  }
}

// Test cases
const person = { name: "Sarah" };
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(executeInContext(greet, person, ["Hello", "!"], "call")); // Expected: "Hello, Sarah!"
console.log(executeInContext(greet, person, ["Hey", "?"], "apply")); // Expected: "Hey, Sarah?"
const boundGreet = executeInContext(greet, person, ["Hi", "..."], "bind");
console.log(boundGreet()); // Expected: "Hi, Sarah..."

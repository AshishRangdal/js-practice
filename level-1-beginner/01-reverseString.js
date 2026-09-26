/**
 * Problem 01: Reverse a String
 *
 * Description:
 * Write a function that takes a string as input and returns the reversed string.
 * Try doing this without using the built-in Array.prototype.reverse() method.
 *
 * Example:
 * Input: "javascript" -> Output: "tpircsavaj"
 * Input: "hello world" -> Output: "dlrow olleh"
 */

function reverseString(str) {
  // TODO: Implement your solution here

  // 1. Using in built methods
  return str.split("").reverse().join("");

  // 2. Using loop
  let result = ""
  for(let i=str.length - 1; i>=0; i--){
    result+=str[i];
  }
  return result
}

// Test cases
console.log(reverseString("javascript")); // Expected: "tpircsavaj"
console.log(reverseString("hello world")); // Expected: "dlrow olleh"
console.log(reverseString("12345")); // Expected: "54321"
console.log(reverseString("")); // Expected: ""

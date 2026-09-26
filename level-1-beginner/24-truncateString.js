/**
 * Problem 24: Truncate a String with Ellipsis
 *
 * Description:
 * Write a function that truncates a string if it is longer than the specified maximum length.
 * Appends "..." to the end if truncated. The returned string length should not exceed maxLength.
 *
 * Example:
 * Input: "JavaScript is amazing", 10 -> Output: "JavaScri..."
 * Input: "Hello", 10 -> Output: "Hello"
 */

function truncateString(str, maxLength) {
  // TODO: Implement your solution here
}

// Test cases
console.log(truncateString("JavaScript is amazing", 10)); // Expected: "JavaScri..." (total length 10)
console.log(truncateString("Hello", 10)); // Expected: "Hello"
console.log(truncateString("Short", 5)); // Expected: "Short"

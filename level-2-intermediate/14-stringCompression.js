/**
 * Problem 14: String Compression (Run-Length Encoding)
 *
 * Description:
 * Write a function that performs basic string compression using the counts of repeated characters.
 * If the compressed string is not shorter than the original, return the original string.
 *
 * Example:
 * Input: "aabcccccaaa" -> Output: "a2b1c5a3"
 * Input: "abcdef" -> Output: "abcdef" (since "a1b1c1d1e1f1" is longer)
 */

function compressString(str) {
  // TODO: Implement your solution here
}

// Test cases
console.log(compressString("aabcccccaaa")); // Expected: "a2b1c5a3"
console.log(compressString("abcdef")); // Expected: "abcdef"
console.log(compressString("aabbcc")); // Expected: "aabbcc" (lengths equal)

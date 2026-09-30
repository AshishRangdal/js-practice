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

  // 2 approach: Using a single pass through the string to build the compressed version

  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}

// Test cases
console.log(compressString("aabcccccaaa")); // Expected: "a2b1c5a3"
console.log(compressString("abcdef")); // Expected: "abcdef"
console.log(compressString("aabbcc")); // Expected: "aabbcc" (lengths equal)

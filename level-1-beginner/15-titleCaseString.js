/**
 * Problem 15: Title Case a Sentence
 *
 * Description:
 * Write a function that converts a sentence string to Title Case
 * (where the first letter of each word is capitalized and the rest are lowercase).
 *
 * Example:
 * Input: "the quick brown fox" -> Output: "The Quick Brown Fox"
 * Input: "JAVASCRIPT IS FUN" -> Output: "Javascript Is Fun"
 */

function titleCase(str) {
  // TODO: Implement your solution here
  const result = str
    .split(" ")
    .filter((word) => (word === "" ? null : word))
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  return result;
}

// Test cases
console.log(titleCase("the quick brown fox")); // Expected: "The Quick Brown Fox"
console.log(titleCase("JAVASCRIPT IS FUN")); // Expected: "Javascript Is Fun"
console.log(titleCase("hello   world")); // Expected: "Hello World" (or preserving spacing)

/**
 * Problem 14: Count Vowels in a String
 *
 * Description:
 * Write a function that takes a string and counts the total number of vowels ('a', 'e', 'i', 'o', 'u')
 * present in it, regardless of case.
 *
 * Example:
 * Input: "JavaScript" -> Output: 3
 * Input: "HELLO WORLD" -> Output: 3
 * Input: "xyz" -> Output: 0
 */

function countVowels(str) {
  // TODO: Implement your solution here
  const vowel = "aeiouAEIOU";
  let ans = 0;
  for (let ch of str) {
    if (vowel.includes(ch)) ans++;
  }
  return ans;
}

// Test cases
console.log(countVowels("JavaScript")); // Expected: 3
console.log(countVowels("HELLO WORLD")); // Expected: 3
console.log(countVowels("xyz")); // Expected: 0
console.log(countVowels("")); // Expected: 0

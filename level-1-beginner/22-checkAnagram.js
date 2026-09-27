/**
 * Problem 22: Check Valid Anagram
 *
 * Description:
 * Write a function that takes two strings and returns true if they are anagrams of each other,
 * and false otherwise. An anagram is formed by rearranging letters of another word.
 *
 * Example:
 * Input: "listen", "silent" -> Output: true
 * Input: "rat", "car" -> Output: false
 */

function isAnagram(str1, str2) {
  // TODO: Implement your solution here
  const cnt1 = {},
    cnt2 = {};
  for (const item of str1) {
    if (cnt1[item]) {
      cnt1[item]++;
    } else {
      cnt1[item] = 1;
    }
  }
  for (const item of str2) {
    if (cnt2[item]) {
      cnt2[item]++;
    } else {
      cnt2[item] = 1;
    }
  }
  for (let [key, value] of Object.entries(cnt1)) {
    if (cnt2[key] !== value) return false;
  }
  return true;
}

// Test cases
console.log(isAnagram("listen", "silent")); // Expected: true
console.log(isAnagram("triangle", "integral")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("aab", "abb")); // Expected: false

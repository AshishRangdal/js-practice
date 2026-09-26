/**
 * Problem 02: Palindrome Check
 *
 * Description:
 * Write a function that checks whether a given string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 * The check should be case-insensitive and ignore spaces/special characters if specified.
 *
 * Example:
 * Input: "madam" -> Output: true
 * Input: "hello" -> Output: false
 * Input: "RaceCar" -> Output: true
 */

function isPalindrome(str) {
  // TODO: Implement your solution here
  
  // 1 Using inbuilt methods
  // return str.split("").reverse().join("").toLowerCase() === str.toLowerCase();

  // 2 Using (1)
  let st = 0, end = str.length - 1;
  while(st<end){
    if(str[st].toLowerCase() != str[end].toLowerCase()) return false;
    st++;
    end--;
  }
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
console.log(isPalindrome("RaceCar")); // Expected: true
console.log(isPalindrome("a")); // Expected: true
console.log(isPalindrome("")); // Expected: true

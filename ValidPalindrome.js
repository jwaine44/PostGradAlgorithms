/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isPalindrome(s){
    let strWOnlyLetters = s.replace(/[^0-9a-zA-Z]/g,"");
    let strLowerCase = strWOnlyLetters.toLowerCase();
    for(let i = 0; i <= strLowerCase.length / 2; i++) {
        if(strLowerCase[i] !== strLowerCase[strLowerCase.length - i - 1]) {
        return false
        }
    }
    return true
}

let s1 = "A man, a plan, a canal: Panama";
let s2 = "race a car";
let s3 = " ";

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
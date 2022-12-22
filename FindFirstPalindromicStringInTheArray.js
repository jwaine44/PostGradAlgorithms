/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

Example 1:
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/

function isPalindrome(word){
    for(let k = 0; k < word.length / 2; k++){
        if(word[k] !== word[word.length - 1 - k]){
            return false;
        }
    }
    return true;
}

function firstPalindrome(words){
    for(let i = 0; i < words.length; i++){
        if(isPalindrome(words[i])){
            return words[i];
        }
    }
    return "";
}

let words1 = ["abc","car","ada","racecar","cool"];
let words2 = ["notapalindrome","racecar"];
let words3 = ["def","ghi"];

console.log(firstPalindrome(words1));
console.log(firstPalindrome(words2));
console.log(firstPalindrome(words3));
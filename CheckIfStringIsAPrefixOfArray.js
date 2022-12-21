/*
Given a string s and an array of strings words, determine whether s is a prefix string of words.

A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

Return true if s is a prefix string of words, or false otherwise.

Example 1:
Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
Output: true
Explanation:
s can be made by concatenating "i", "love", and "leetcode" together.

Example 2:
Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.
*/

function isPrefixString(s, words){
    let result = "";
    for(let i = 0; i < words.length; i++){
        result += words[i];
        if(result == s){
            return true;
        }
    }
    return false;
}

let s1 = "iloveleetcode";
let words1 = ["i","love","leetcode","apples"];
let words2 = ["apples","i","love","leetcode"];

console.log(isPrefixString(s1, words1));
console.log(isPrefixString(s1, words2));
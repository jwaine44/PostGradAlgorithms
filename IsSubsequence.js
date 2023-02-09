/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

function isSubsequence(s, t){
    let count = 0;
    for(let j = 0; j < t.length; j++){
        if(s[count] == t[j]){
            count++;
            continue;
        }
    }
    return count == s.length;
}

let s1 = "abc";
let s2 = "axc";
let s3 = "acb";
let t1 = "ahbgdc";

console.log(isSubsequence(s1, t1));
console.log(isSubsequence(s2, t1));
console.log(isSubsequence(s3, t1));
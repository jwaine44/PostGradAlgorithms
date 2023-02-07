/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

function firstUniqChar(s){
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
}

let s1 = "leetcode";
let s2 = "loveleetcode";
let s3 = "aabb";

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
console.log(firstUniqChar(s3));
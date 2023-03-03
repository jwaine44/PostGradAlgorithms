/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack, needle){
    let output = "";
    let j = 0;
    for(let i = 0; i < haystack.length; i++){
        output += haystack[i];
        if(output == needle){
            return i - (needle.length - 1);
        }
        if(output.length == needle.length && output != needle){
            output = "";
            j++;
            i = j - 1;
        }
    }
    return -1;
}

let h1 = "sadbutsad";
let h2 = "leetcode";
let h3 = "hello";
let h4 = "mississippi";
let n1 = "sad";
let n2 = "leeto";
let n3 = "ll";
let n4 = "issip";

console.log(strStr(h1, n1)); // 0
console.log(strStr(h2, n2)); // -1
console.log(strStr(h3, n3)); // 2
console.log(strStr(h4, n4)); // 4
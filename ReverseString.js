/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

function reverseString(s){
    s = s.reverse();
}

let s1 = ["h","e","l","l","o"];
let s2 = ["H","a","n","n","a","h"];

console.log(reverseString(s1));
console.log(reverseString(s2));
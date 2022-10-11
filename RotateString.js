/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false
*/

function rotateString(s, goal){
    return (goal + goal).indexOf(s) != -1 && s.length == goal.length;
}

let s1 = "abcde";
let goal1 = "cdeab";
let goal2 = "abced";

console.log(rotateString(s1, goal1));
console.log(rotateString(s1, goal2));
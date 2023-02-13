/*
Given an integer num, return a string of its base 7 representation.

Example 1:
Input: num = 100
Output: "202"

Example 2:
Input: num = -7
Output: "-10"
*/

function convertToBase7(num){
    return num.toString(7);
}

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
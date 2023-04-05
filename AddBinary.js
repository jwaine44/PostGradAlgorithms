/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

function addBinary(a, b){
    a = BigInt(`0b${a}`);
    b = BigInt(`0b${b}`);
    return (a + b).toString(2);
}

let a1 = "11";
let b1 = "1";
let a2 = "1010";
let b2 = "1011";

console.log(addBinary(a1, b1));
console.log(addBinary(a2, b2));
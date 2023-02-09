/*
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"
Output: 1
*/

function countSegments(s){
    s = s.split(" ");
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] != " " && s[i] != ""){
            count++;
        }
    }
    return count;
}

let s1 = "Hello, my name is John";
let s2 = "Hello";
let s3 = "                ";
let s4 = "Of all the gin joints in all the towns in all the world,   ";

console.log(countSegments(s1));
console.log(countSegments(s2));
console.log(countSegments(s3));
console.log(countSegments(s4));
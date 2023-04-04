/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
*/

function isIsomorphic(s, t){
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)){
            return false;
        }
    }
    return true;
}

let s1 = "egg";
let t1 = "add";
let s2 = "foo";
let t2 = "bar";
let s3 = "paper";
let t3 = "title";

console.log(isIsomorphic(s1, t1));
console.log(isIsomorphic(s2, t2));
console.log(isIsomorphic(s3, t3));
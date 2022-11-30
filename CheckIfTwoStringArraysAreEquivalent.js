/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

function arrayStringsAreEqual(word1, word2){
    return word1.join("") == word2.join("");
}

let w1 = ["ab", "c"];
let w2 = ["a", "bc"];
let w3 = ["a", "cb"];
let w4 = ["abc", "d", "defg"];
let w5 = ["abcddefg"];

console.log(arrayStringsAreEqual(w1, w2));
console.log(arrayStringsAreEqual(w3, w1));
console.log(arrayStringsAreEqual(w4, w5));
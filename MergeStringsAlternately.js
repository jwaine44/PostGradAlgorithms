/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

function mergeAlternately(word1, word2){
    let result = "";
    if(word1.length >= word2.length){
        for(let i = 0; i < word1.length; i++){
            if(word2[i] != undefined){
                result += word1[i];
                result += word2[i];
            } else {
                result += word1[i];
            }
        }
    } else if(word1.length < word2.length){
        for(let j = 0; j < word2.length; j++){
            if(word1[j] != undefined){
                result += word1[j];
                result += word2[j];
            } else {
                result += word2[j];
            }
        }
    }
    return result;
}

let word1 = "abc";
let word2 = "pqr";
let word3 = "ab";
let word4 = "pqrs";
let word5 = "abcd";
let word6 = "pq";

console.log(mergeAlternately(word1, word2));
console.log(mergeAlternately(word3, word4));
console.log(mergeAlternately(word5, word6));
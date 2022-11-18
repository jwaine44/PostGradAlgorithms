/*
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
*/

function maxPower(s){
    let count = 1;
    let max = 1;
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i + 1]){
            count++;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    return max;
}

let s1 = "leetcode";
let s2 = "abbcccddddeeeeedcba";

console.log(maxPower(s1));
console.log(maxPower(s2));
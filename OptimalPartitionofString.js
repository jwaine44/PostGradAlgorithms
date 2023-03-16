/*
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

Example 1:
Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.

Example 2:
Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
*/

function partitionString(s){
    let output = [];
    let str = "";
    for(let i = 0; i < s.length; i++){
        if(str.includes(s[i])){
            output.push(str);
            str = "";
        }
        str += s[i];
        if(i == s.length - 1){
            output.push(str);
        }
    }
    return output.length;
}

let s1 = "abacaba";
let s2 = "ssssss";

console.log(partitionString(s1));
console.log(partitionString(s2));
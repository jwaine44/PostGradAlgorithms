/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
*/

function balancedStringSplit(s){
    let lCount = 0;
    let rCount = 0;
    let balancedCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "L"){
            lCount++;
        } else {
            rCount++;
        }
        if(lCount == rCount){
            balancedCount++;
            rCount = 0;
            lCount = 0;
        }
    }
    return balancedCount;
}

let s1 = "RLRRLLRLRL";
let s2 = "RLRRRLLRLL";
let s3 = "LLLLRRRR";

console.log(balancedStringSplit(s1));
console.log(balancedStringSplit(s2));
console.log(balancedStringSplit(s3));
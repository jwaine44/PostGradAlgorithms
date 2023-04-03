/*
You are given a binary string s consisting only of zeroes and ones.

A substring of s is considered balanced if all zeroes are before ones and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.

Return the length of the longest balanced substring of s.

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "01000111"
Output: 6
Explanation: The longest balanced substring is "000111", which has length 6.

Example 2:
Input: s = "00111"
Output: 4
Explanation: The longest balanced substring is "0011", which has length 4. 

Example 3:
Input: s = "111"
Output: 0
Explanation: There is no balanced substring except the empty substring, so the answer is 0.
*/

function findTheLongestBalancedSubstring(s){
    let oneCount = 0;
    let zeroCount = 0;
    let max = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == "0"){
            if(oneCount !== 0){
                zeroCount = 0;
                oneCount = 0;
            }
            zeroCount++;
        } else {
            oneCount++;
            if(zeroCount !== 0){
                max = Math.max(max, 2* Math.min(zeroCount, oneCount));
            }
        }
    }
    return max;
}

let s1 = "01000111";
let s2 = "00111";
let s3 = "111";

console.log(findTheLongestBalancedSubstring(s1));
console.log(findTheLongestBalancedSubstring(s2));
console.log(findTheLongestBalancedSubstring(s3));
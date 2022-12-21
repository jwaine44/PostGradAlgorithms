/*
Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

Example 1:
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.

Example 2:
Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.

Example 3:
Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
*/

function checkString(s){
    if(!s.includes("b")){
        return true;
    }
    for(let i = s.indexOf("b"); i < s.length; i++){
        if(s[i] == "a"){
            return false;
        }
    }
    return true;
}

let s1 = "aaabbb";
let s2 = "abab";
let s3 = "bbb";
let s4 = "a";

console.log(checkString(s1));
console.log(checkString(s2));
console.log(checkString(s3));
console.log(checkString(s4));
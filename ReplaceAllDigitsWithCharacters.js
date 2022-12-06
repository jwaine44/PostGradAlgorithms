/*
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

Example 1:
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Example 2:
Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'
*/

function replaceDigits(s){
    let output = [];
    for(let i = 0; i < s.length; i++){
        if(Number(s[i])){
            output.push(String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i])));
        } else if(s[i] == "0"){
            output.push(s[i - 1]);
        } else {
            output.push(s[i]);
        }
    }
    return output.join("");
}

let s1 = "a1c1e1";
let s2 = "a1b2c3d4e";
let s3 = "v0gmswd";

console.log(replaceDigits(s1));
console.log(replaceDigits(s2));
console.log(replaceDigits(s3));

console.log('a'.charCodeAt());
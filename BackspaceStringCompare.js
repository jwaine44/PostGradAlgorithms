/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

function backspaceCompare(s, t){
    let outputS = [];
    let outputT = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "#"){
            outputS.pop();
        } else {
            outputS.push(s[i]);
        }
    }
    for(let j = 0; j < t.length; j++){
        if(t[j] == "#"){
            outputT.pop();
        } else {
            outputT.push(t[j]);
        }
    }
    return outputS.join("") == outputT.join("");
}

let s1 = "ab#c";
let t1 = "ad#c";
let s2 = "ab##";
let t2 = "c#d#";
let s3 = "a#c";
let t3 = "b";

console.log(backspaceCompare(s1, t1));
console.log(backspaceCompare(s2, t2));
console.log(backspaceCompare(s3, t3));
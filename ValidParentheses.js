/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

function isValid(s){
    let object = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };

    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(object[s[i]]){
            arr.push(s[i]);
        } else if(object[arr.pop()] != s[i]){
            return false;
        }
    }
    if(arr.length){
        return false;
    }
    return true;
}

let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";
let s4 = "(){}}{";

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
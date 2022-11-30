/*
Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

Example 1:
Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".

Example 2:
Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww"."
*/

function modifyString(s){
    s = s.split("");
    for(let i = 0; i < s.length; i++){
        if(s[i] == "?"){
            if(s[i - 1] !== "a" && s[i + 1] !== "a"){
                s[i] = "a";
            } else if(s[i - 1] !== "b" && s[i + 1] !== "b"){
                s[i] = "b";
            } else if(s[i - 1] !== "c" && s[i + 1] !== "c"){
                s[i] = "c";
            }
        }
    }
    return s.join("");
}

let s1 = "?zs";
let s2 = "ubv?w";

console.log(modifyString(s1));
console.log(modifyString(s2));
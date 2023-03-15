/*
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.

Example 1:
Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

Example 2:
Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.

Example 3:
Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.
*/

function reformat(s){
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let letters = [];
    let numbers = [];
    let output = "";
    if(s.length == 1){
        return s;
    }
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            letters.push(s[i]);
        } else if(nums.includes(s[i])){
            numbers.push(s[i]);
        }
    }
    if(Math.abs(letters.length - numbers.length) > 1){
        return "";
    } else {
        if(letters.length > numbers.length){
            for(let j = 0; j < letters.length; j++){
                if(letters[j]){
                    output += letters[j];
                }
                if(numbers[j]){
                    output += numbers[j];
                }
            }
        } else {
            for(let k = 0; k < numbers.length; k++){
                if(numbers[k]){
                    output += numbers[k];
                }
                if(letters[k]){
                    output += letters[k];
                }
            }
        }
    }
    return output;
}

let s1 = "a0b1c2";
let s2 = "leetcode";
let s3 = "1229857369";
let s4 = "covid2019";
let s5 = "a12bcd";

console.log(reformat(s1));
console.log(reformat(s2));
console.log(reformat(s3));
console.log(reformat(s4));
console.log(reformat(s5));
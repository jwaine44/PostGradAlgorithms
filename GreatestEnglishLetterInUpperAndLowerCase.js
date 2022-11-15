/*
Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

An English letter b is greater than another letter a if b appears after a in the English alphabet.

Example 1:
Input: s = "lEeTcOdE"
Output: "E"
Explanation:
The letter 'E' is the only letter to appear in both lower and upper case.

Example 2:
Input: s = "arRAzFif"
Output: "R"
Explanation:
The letter 'R' is the greatest letter to appear in both lower and upper case.
Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

Example 3:
Input: s = "AbCdEfGhIjK"
Output: ""
Explanation:
There is no letter that appears in both lower and upper case.
*/

function greatestLetter(s){
    let output = "";
    for(let i = 0; i < s.length; i++){
        if(s[i].toLowerCase() != s[i] && s.includes(s[i].toLowerCase())){
            if(output < s[i]){
                output = s[i];
            }
        }
    }
    return output.toUpperCase();
}

let s1 = "lEeTcOdE";
let s2 = "arRAzFif";
let s3 = "AbCdEfGhIjK";

console.log(greatestLetter(s1));
console.log(greatestLetter(s2));
console.log(greatestLetter(s3));
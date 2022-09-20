/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701
*/

function titleToNumber(columnTitle){
    let letters = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    let exponent = 0;
    for(let i = columnTitle.length - 1; i >= 0; i--){
        result += letters.indexOf(columnTitle[i]) * Math.pow(26, exponent);
        exponent++;
    }
    return result;
}

let title1 = "A";
let title2 = "AB";
let title3 = "ZY";

console.log(titleToNumber(title1));
console.log(titleToNumber(title2));
console.log(titleToNumber(title3));
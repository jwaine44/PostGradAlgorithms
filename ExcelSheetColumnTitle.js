/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
*/

function convertToTitle(columnNumber){
    let letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let title = "";
    while(columnNumber > 0){
        let remainder = Math.floor(columnNumber % 26);
        if(remainder === 0){
            title += letters[26];
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            title += letters[remainder];
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return title.split("").reverse().join("");
}

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
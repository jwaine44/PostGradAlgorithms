/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
*/

function nextGreatestLetter(letters, target){
    letters.sort();
    for(let i = 0; i < letters.length; i++){
        if(letters[i] > target){
            return letters[i]
        }
    }
    return letters[0];
}

let letters1 = ["c","f","j"];
let letters2 = ["x","x","y","y"];
let target1 = "a";
let target2 = "c";
let target3 = "z";

console.log(nextGreatestLetter(letters1, target1));
console.log(nextGreatestLetter(letters1, target2));
console.log(nextGreatestLetter(letters2, target3));
/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false
*/

function detectCapitalUse(word){
    if(word == word.toUpperCase() || word == word[0] + word.substr(1).toLowerCase()){
        return true;
    }
    return false;
}

let word1 = "USA";
let word2 = "FlaG";

console.log(detectCapitalUse(word1));
console.log(detectCapitalUse(word2));
console.log(detectCapitalUse("leetcode"));
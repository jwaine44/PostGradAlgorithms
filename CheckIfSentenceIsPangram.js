/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false
*/

function checkIfPangram(sentence){
    let arr = [];
    for(let i = 0; i < sentence.length && arr.length < 26; i++){
        if(!arr.includes(sentence[i])){
            arr.push(sentence[i]);
        }
    }
    return arr.length == 26;
}

let sentence1 = "thequickbrownfoxjumpsoverthelazydog";
let sentence2 = "leetcode";

console.log(checkIfPangram(sentence1));
console.log(checkIfPangram(sentence2));
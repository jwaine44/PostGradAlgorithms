/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

Example 1:
Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.

Example 2:
Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.

Example 3:
Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because the 'e' key is broken.
*/

function canBeTypedWords(text, brokenLetters){
    let count = 0;
    let sum = 0;
    text = text.split(" ");
    brokenLetters = brokenLetters.split("");
    for(let i = 0; i < text.length; i++){
        sum = 0;
        for(let j = 0; j < text[i].length; j++){
            if(!brokenLetters.includes(text[i][j])){
                sum++;
            }
        }
        if(sum == text[i].length){
            count++;
        }
    }
    return count;
}

let text1 = "hello world";
let text2 = "leet code";
let brokenLetters1 = "ad";
let brokenLetters2 = "lt";
let brokenLetters3 = "e";

console.log(canBeTypedWords(text1, brokenLetters1));
console.log(canBeTypedWords(text2, brokenLetters2));
console.log(canBeTypedWords(text2, brokenLetters3));
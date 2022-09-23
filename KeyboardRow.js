/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
*/

function findWords(words){
    let output = [];
    let row1Arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    let row2Arr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let row3Arr = ["z", "x", "c", "v", "b", "n", "m"];
    let row1 = true;
    let row2 = true;
    let row3 = true;
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(!row1Arr.includes(words[i][j].toLowerCase())){
                row1 = false;
                break;
            }
        }
        if(row1){
            output.push(words[i]);
            continue;
        } else {
            row1 = true;
        }

        for(let j = 0; j < words[i].length; j++){
            if(!row2Arr.includes(words[i][j].toLowerCase())){
                row2 = false;
                break;
            }
        }
        if(row2){
            output.push(words[i]);
            continue;
        } else {
            row2 = true;
        }

        for(let j = 0; j < words[i].length; j++){
            if(!row3Arr.includes(words[i][j].toLowerCase())){
                row3 = false;
                break;
            }
        }
        if(row3){
            output.push(words[i]);
            continue;
        } else {
            row3 = true;
        }
    }
    return output;
}

let words1 = ["Hello", "Alaska", "Dad", "Peace"];
let words2 = ["omk"];
let words3 = ["adsdf", "sfd"];

console.log(findWords(words1));
console.log(findWords(words2));
console.log(findWords(words3));
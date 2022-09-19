/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function canConstruct(ransomNote, magazine){
    while(ransomNote.length > 0 && magazine.length > 0){
        if(magazine.includes(ransomNote[0])){
            magazine = magazine.replace(ransomNote[0], '');
            ransomNote = ransomNote.substring(1);
            
        }else{
            return false;
        }
    }
    return (ransomNote.length == 0);
}

// ransomNote = ransomNote.split("").sort();
// magazine = magazine.split("").sort();
// let count = 0;
// for(let i = 0; i < magazine.length; i++){
//     if(ransomNote[i] == magazine[i]){
//         count++;
//     }
// }
// if(count == ransomNote.length){
//     return true;
// }
// return false;

let note1 = "a";
let note2 = "aa";
let note3 = "bg";
let mag1 = "b";
let mag2 = "ab";
let mag3 = "aab";
let mag4 = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"

console.log(canConstruct(note1, mag1));
console.log(canConstruct(note2, mag2));
console.log(canConstruct(note2, mag3));
console.log(canConstruct(note3, mag4));
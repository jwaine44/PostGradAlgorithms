/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false.

Example 1:
Input: sentence = "leetcode exercises sound delightful"
Output: true
Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
- leetcode's last character is equal to exercises's first character.
- exercises's last character is equal to sound's first character.
- sound's last character is equal to delightful's first character.
- delightful's last character is equal to leetcode's first character.
The sentence is circular.

Example 2:
Input: sentence = "eetcode"
Output: true
Explanation: The words in sentence are ["eetcode"].
- eetcode's last character is equal to eetcode's first character.
The sentence is circular.
*/

function isCircularSentence(sentence){
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] == " "){
            if(sentence[i - 1] !== sentence[i + 1]){
                return false;
            }
        }
    }
    if(sentence[0] == sentence[sentence.length - 1]){
        if(sentence.length == 1){
            return true;
        }
        return true;
    }
    return false;
}

let sentence1 = "leetcode exercises sound delightful";
let sentence2 = "eetcode";
let sentence3 = "Leetcode is cool";
let sentence4 = "leetcode";

let test = sentence1.split(" ");
console.log(test);

console.log(isCircularSentence(sentence1));
console.log(isCircularSentence(sentence2));
console.log(isCircularSentence(sentence3));
console.log(isCircularSentence(sentence4));
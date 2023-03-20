/*
Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third".

Example 1:
Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]

Example 2:
Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]
*/

function findOccurrences(text, first, second){
    text = text.split(" ");
    let output = [];
    for(let i = 0; i < text.length; i++){
        if(text[i - 2] == first && text[i - 1] == second){
            output.push(text[i]);
        }
    }
    return output;
}

let text1 = "alice is a good girl she is a good student";
let text2 = "we will we will rock you";
let first1 = "a";
let first2 = "we";
let second1 = "good";
let second2 = "will";

console.log(findOccurrences(text1, first1, second1));
console.log(findOccurrences(text2, first2, second2));
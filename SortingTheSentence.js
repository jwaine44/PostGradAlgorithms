/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence. 

Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
*/

function sortSentence(s){
    let result = "";
    s = s.split(" ");
    for(let i = 1; i < 10; i++){
        for(let j = 0; j < s.length; j++){
            if(s[j].includes(i)){
                result += s[j];
            }
        }
    }
    result = result.split("");
    for(let k = 0; k < result.length; k++){
        if(Number(result[k])){
            result[k] = " ";
        }
        if(k == result.length - 1){
            result[k] = "";
        }
    }
    return result.join("");
}

let s1 = "is2 sentence4 This1 a3";
let s2 = "Myself2 Me1 I4 and3";

console.log(sortSentence(s1));
console.log(sortSentence(s2));
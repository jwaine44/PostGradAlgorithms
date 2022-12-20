/*
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

Example 1:
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

Example 2:
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

Example 3:
Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
*/

function reversePrefix(word, ch){
    word = word.split("");
    let result = [];
    let leftover = "";
    for(let i = 0; i <= word.indexOf(ch); i++){
        result.push(word[i]);
    }
    for(let j = word.indexOf(ch) + 1; j < word.length; j++){
        leftover += word[j];
    }
    result = result.reverse().join("");

    return result + leftover;
}

let word1 = "abcdefd";
let word2 = "xyxzxe";
let word3 = "abcd";
let ch1 = "d";
let ch2 = "z";

let test = word1.split("");
console.log(test.indexOf("b"));

console.log(reversePrefix(word1, ch1));
console.log(reversePrefix(word2, ch2));
console.log(reversePrefix(word3, ch2));
/*
Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:
Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.
*/

function stringMatching(words){
    words = words.sort((a, b) => b.length - a.length);
    let output = [];
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[i].includes(words[j])){
                output.push(words[j]);
            }
        }
    }
    return Array.from(new Set(output));
}

let words1 = ["mass","as","hero","superhero"];
let words2 = ["leetcode","et","code"];
let words3 = ["blue","green","bu"];
let words4 = ["leetcoder","leetcode","od","hamlet","am"];

console.log(stringMatching(words1));
console.log(stringMatching(words2));
console.log(stringMatching(words3));
console.log(stringMatching(words4));
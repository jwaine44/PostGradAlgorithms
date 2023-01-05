/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

Example 1:
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Example 2:
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
*/

function prefixCount(words, pref){
    let count = 0;
    let prefixArr = [];
    for(let i = 0; i < words.length; i++){
        let wordPrefix = "";
        for(let j = 0; j < pref.length; j++){
            wordPrefix += words[i][j];
            if(wordPrefix.length == pref.length){
                prefixArr.push(wordPrefix);
            }
        }
    }
    for(let k = 0; k < prefixArr.length; k++){
        if(prefixArr[k] == pref){
            count++;
        }
    }
    return count;
}

let words1 = ["pay","attention","practice","attend"];
let words2 = ["leetcode","win","loops","success"];
let pref1 = "at";
let pref2 = "code";

console.log(prefixCount(words1, pref1));
console.log(prefixCount(words2, pref2));
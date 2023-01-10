/*
You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

Example 1:
Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

Example 2:
Input: words = ["a","a"], s = "aa"
Output: 2
Explanation:
Both of the strings are a prefix of s. 
Note that the same string can occur multiple times in words, and it should be counted each time.
*/

function countPrefixes(words, s){
    let count = 0;
    for(let i = 0; i < words.length; i++){
        if(s.startsWith(words[i])){
            count++;
        }
    }
    return count;
}

let words1 = ["a","b","c","ab","bc","abc"];
let words2 = ["a","a"];
let s1 = "abc";
let s2 = "aa";

console.log(countPrefixes(words1, s1));
console.log(countPrefixes(words2, s2));
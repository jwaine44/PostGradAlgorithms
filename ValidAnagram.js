/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

function isAnagram(s, t){
    s = s.split("").sort();
    t = t.split("").sort();
    let count = 0;
    if(s.length != t.length){
        return false;
    } else {
        for(let i = 0; i < s.length; i++){
            if(s[i] == t[i]){
                count++;
            }
        }
        if(count == s.length){
            return true;
        }
    }
    return false;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
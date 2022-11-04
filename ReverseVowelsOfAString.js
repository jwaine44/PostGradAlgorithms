/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

function reverseVowels(s){
    const vowels = ["a", "e", "i", "o", "u"];
    s = s.split("");
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(vowels.includes(s[left].toLowerCase()) && vowels.includes(s[right].toLowerCase())){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
        if(!vowels.includes(s[left].toLowerCase())){
            left++;
        }
        if(!vowels.includes(s[right].toLowerCase())){
            right--;
        }
    }
    return s.join("");
}

let s1 = "hello";
let s2 = "leetcode";

console.log(reverseVowels(s1));
console.log(reverseVowels(s2));
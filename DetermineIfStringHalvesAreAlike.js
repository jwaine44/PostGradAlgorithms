/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
*/

function halvesAreAlike(s){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let leftCount = 0;
    let rightCount = 0;
    for(let i = 0; i < s.length / 2; i++){
        if(vowels.includes(s[i])){
            leftCount++;
        }
    }
    for(let j = s.length / 2; j < s.length; j++){
        if(vowels.includes(s[j])){
            rightCount++;
        }
    }
    return leftCount == rightCount;
}

let s1 = "book";
let s2 = "textbook";

console.log(halvesAreAlike(s1));
console.log(halvesAreAlike(s2));
/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
*/

function reverseWords(s){
    return s
      .split(" ")  // To take individual words depending on the space, split the string.
        .map((word) => 
            word.split("")// To create the string, divide each word into characters, 
                  .reverse() //  reverse those characters,
                    .join("")) //  and then put them back together.
                        .join(" "); // build the words, then combine them once more into a string with spaces between them.
}

let s1 = "Let's take LeetCode contest";
let s2 = "God Ding";

console.log(reverseWords(s1));
console.log(reverseWords(s2));
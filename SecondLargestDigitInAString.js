/*
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit.
*/

function secondHighest(s){
    let max = -1;
    let secondLargest = -1;
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        if(current <= "9" && current >= "0"){
            if(current > max){
                secondLargest = max;
                max = current;
            } else if(current < max && current > secondLargest){
                secondLargest = current;
            }
        }
    }
    return secondLargest;
}

let s1 = "dfa12321afd";
let s2 = "abc1111";
let s3 = "xyz";
let s4 = "ck077";

console.log(secondHighest(s1));
console.log(secondHighest(s2));
console.log(secondHighest(s3));
console.log(secondHighest(s4));
/*
Given a roman numeral, convert it to an integer.

Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/

function romanToInt(s) {
    const hashMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let first = 0;
    let second = 1;
    let sum = 0;
    while (first < s.length){
        if(hashMap[s[first]] < hashMap[s[second]]){
        sum -= hashMap[s[first]];
        } else {
        sum += hashMap[s[first]];
    }
    first++;
    second++;
    }
    return sum;
};

let s1 = "III";
let s2 = "LVIII";
let s3 = "MCMXCIV";

console.log(romanToInt(s1));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
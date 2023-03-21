/*
You are given two strings s and t. In one step, you can append any character to either s or t.

Return the minimum number of steps to make s and t anagrams of each other.

An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Example 1:
Input: s = "leetcode", t = "coats"
Output: 7
Explanation: 
- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
"leetcodeas" and "coatsleede" are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

Example 2:
Input: s = "night", t = "thing"
Output: 0
Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
*/

function minSteps(s, t){
    let count = 0;
    if(s.split("").sort().join("") == t.split("").sort().join("")){
        return 0;
    } else {
        let sMap = new Map();
        let tMap = new Map()
    for(let i = 0; i < s.length; i++){
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    }
    for(let j = 0; j < t.length; j++){
        tMap.set(t[j], (tMap.get(t[j]) ?? 0) + 1);
    }
    for(let [key, val] of sMap){
        if(!tMap.has(key)){
            count += val;
        } else if(tMap.has(key) && val > tMap.get(key)){
            count += (val - tMap.get(key));
        }
    }
    for(let [key, val] of tMap){
        if(!sMap.has(key)){
            count += val;
        } else if(sMap.has(key) && val > sMap.get(key)){
            count += (val - sMap.get(key));
        }
    }
    return count;
    }
}

let s1 = "leetcode";
let s2 = "night";
let s3 = "cotxazilut";
let t1 = "coats";
let t2 = "thing";
let t3 = "nahrrmcchxwrieqqdwdpneitkxgnt";

console.log(minSteps(s1, t1));
console.log(minSteps(s2, t2));
console.log(minSteps(s3, t3));
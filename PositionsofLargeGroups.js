/*
In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.

Example 1:
Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.

Example 2:
Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.

Example 3:
Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
*/

function largeGroupPositions(s){
    let count = 1;
    let output = [];
    for(let i = 1; i < s.length; i++){
        if(s[i] == s[i - 1]){
            count++;
        } else {
            if(count > 2){
                output.push([i - count, i - 1]);
            }
            count = 1;
        }
        if(i == s.length - 1){
            if(count > 2){
                output.push([i - (count - 1), i]);
            }
        }
    }
    return output;
}

let s1 = "abbxxxxzzy";
let s2 = "abc";
let s3 = "abcdddeeeeaabbbcd";
let s4 = "aaa";

console.log(largeGroupPositions(s1));
console.log(largeGroupPositions(s2));
console.log(largeGroupPositions(s3));
console.log(largeGroupPositions(s4));
/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

function numJewelsInStones(jewels, stones){
    jewels = jewels.split("");
    let count = 0;
    for(let i = 0; i < jewels.length; i++){
        for(let j = 0; j < stones.length; j++){
            if(stones[j] == jewels[i]){
                count++;
            }
        }
    }
    return count;
}

let jewels1 = "aA";
let jewels2 = "z";
let stones1 = "aAAbbbb";
let stones2 = "ZZ";

console.log(numJewelsInStones(jewels1, stones1));
console.log(numJewelsInStones(jewels2, stones2));
/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/

function uniqueOccurrences(arr){
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    let vals = Array.from(map.values()).sort((a, b) => a - b);
    for(let k = 0; k < vals.length; k++){
        if(vals[k] == vals[k + 1]){
            return false;
        }
    }
    return true;
}

let arr1 = [1,2,2,1,1,3];
let arr2 = [1,2];
let arr3 = [-3,0,1,-3,1,1,1,-3,10,0];

console.log(uniqueOccurrences(arr1));
console.log(uniqueOccurrences(arr2));
console.log(uniqueOccurrences(arr3));
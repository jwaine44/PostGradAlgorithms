/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/

function findLucky(arr){
    let map = new Map();
    let matches = [];
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    for(let [key, val] of map){
        if(key == val){
            matches.push(key);
        }
    }
    matches = matches.sort((a, b) => a - b);
    if(matches.length > 1){
        return matches[matches.length - 1];
    } else if(matches.length == 1){
        return matches[0];
    } else if(matches.length == 0){
        return -1;
    }
}

let arr1 = [2,2,3,4];
let arr2 = [1,2,2,3,3,3];
let arr3 = [2,2,2,3,3];
let arr4 = [4,3,2,2,4,1,3,4,3];

console.log(findLucky(arr1));
console.log(findLucky(arr2));
console.log(findLucky(arr3));
console.log(findLucky(arr4));
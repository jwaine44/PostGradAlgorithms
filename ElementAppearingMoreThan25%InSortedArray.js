/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

Example 1:
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:
Input: arr = [1,1]
Output: 1
*/

function findSpecialInteger(arr){
    if(arr.length == 1){
        return arr[0];
    }
    let count = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] == arr[i - 1]){
            count++;
        } else {
            count = 1;
        }
        if(count > arr.length / 4){
            return arr[i];
        }
    }
}

let arr1 = [1,2,2,6,6,6,6,7,10];
let arr2 = [1,1];

console.log(findSpecialInteger(arr1));
console.log(findSpecialInteger(arr2));
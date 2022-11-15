/*
Given an array arr of integers, check if there exist two indices i and j such that :

Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
*/

function checkIfExist(arr){
    arr = arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        let j = arr.length - 1;
        while(j >= 0){
            if(arr[j] * 2 == arr[i] && j !== i){
                return true;
            }
            j--;
        }
    }
    return false;
}

let arr1 = [10,2,5,3];
let arr2 = [3,1,7,11];
let arr3 = [-10,12,-20,-8,15];
let arr4 = [-2,0,10,-19,4,6,-8];

console.log(checkIfExist(arr1));
console.log(checkIfExist(arr2));
console.log(checkIfExist(arr3));
console.log(checkIfExist(arr4));
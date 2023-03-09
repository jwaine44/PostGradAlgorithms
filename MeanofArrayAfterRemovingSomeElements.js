/*
Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

Example 1:
Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

Example 2:
Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
Output: 4.00000

Example 3:
Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
Output: 4.77778
*/

function trimMean(arr){
    arr = arr.sort((a, b) => a - b);
    let sum = 0;
    let trimLength = arr.length * .05;
    for(let i = 0; i < trimLength; i++){
        arr.pop();
        arr.shift();
    }
    for(let j = 0; j < arr.length; j++){
        sum += arr[j];
    }
    return sum / arr.length;
}

let arr1 = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3];
let arr2 = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0];
let arr3 = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];

console.log(trimMean(arr1));
console.log(trimMean(arr2));
console.log(trimMean(arr3));
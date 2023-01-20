/*
Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

Example 1:
Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

Example 2:
Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.
*/

function averageValue(nums){
    let output = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0 && nums[i] % 3 == 0){
            output.push(nums[i]);
        }
    }
    let sum = 0;
    for(let j = 0; j < output.length; j++){
        sum += output[j];
    }
    if(output.length == 0){
        return 0;
    } else {
        return Math.floor(sum / output.length);
    }
}

let nums1 = [1,3,6,10,12,15];
let nums2 = [1,2,4,7,10];

console.log(averageValue(nums1));
console.log(averageValue(nums2));
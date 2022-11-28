/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

function runningSum(nums){
    let sum = 0;
    let output = [];
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        output.push(sum);
    }
    return output;
}

let nums1 = [1,2,3,4];
let nums2 = [1,1,1,1,1];
let nums3 = [3,1,2,10,1];

console.log(runningSum(nums1));
console.log(runningSum(nums2));
console.log(runningSum(nums3));
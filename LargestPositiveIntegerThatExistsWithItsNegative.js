/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

Example 1:
Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:
Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:
Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
*/

function findMaxK(nums){
    nums = nums.sort((a, b) => b - a);
    let positives = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            positives.push(nums[i]);
        }
    }
    for(let j = 0; j < positives.length; j++){
        if(nums.includes(-positives[j])){
            return positives[j];
        }
    }
    return -1;
}

let nums1 = [-1,2,-3,3];
let nums2 = [-1,10,6,7,-7,1];
let nums3 = [-10,8,6,7,-2,-3];

console.log(findMaxK(nums1));
console.log(findMaxK(nums2));
console.log(findMaxK(nums3));
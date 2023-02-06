/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24

Example 3:
Input: nums = [-1,-2,-3]
Output: -6
*/

function maximumProduct(nums){
    nums = nums.sort((a, b) => a - b);
    return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
}

let nums1 = [1,2,3];
let nums2 = [1,2,3,4];
let nums3 = [-1,-2,-3];
let nums4 = [-100,-98,-1,2,3,4];

console.log(maximumProduct(nums1));
console.log(maximumProduct(nums2));
console.log(maximumProduct(nums3));
console.log(maximumProduct(nums4));
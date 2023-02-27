/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false
*/

function isMonotonic(nums){
    let increasing = true;
    let decreasing = true;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i + 1]){
            decreasing = false;
        }
        if(nums[i] < nums[i + 1]){
            increasing = false;
        }
    }
    return increasing || decreasing;
}

let nums1 = [1,2,2,3];
let nums2 = [6,5,4,4];
let nums3 = [1,3,2];
let nums4 = [1,1,2];
let nums5 = [1,1,0];

console.log(isMonotonic(nums1));
console.log(isMonotonic(nums2));
console.log(isMonotonic(nums3));
console.log(isMonotonic(nums4));
console.log(isMonotonic(nums5));
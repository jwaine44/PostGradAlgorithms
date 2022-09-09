/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function containsDuplicate(nums) {
    nums = nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            return true;
        }
    }
    return false;
}

let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];
let nums3 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));
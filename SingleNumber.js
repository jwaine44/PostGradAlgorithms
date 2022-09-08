/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

function singleNumber(nums) {
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i + 1]){
            return nums[i];
        }
        i++;
    }
}

let nums1 = [2,2,1];
let nums2 = [4,1,2,1,2];
let nums3 = [1];

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));
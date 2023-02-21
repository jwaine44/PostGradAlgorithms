/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
*/

function singleNonDuplicate(nums){
    for(let i = 0; i < nums.length; i += 2){
        if(nums[i] !== nums[i + 1]){
            return nums[i];
        }
    }
}

let nums1 = [1,1,2,3,3,4,4,8,8];
let nums2 = [3,3,7,7,10,11,11];

console.log(singleNonDuplicate(nums1));
console.log(singleNonDuplicate(nums2));
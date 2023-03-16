/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:
Input: nums = [1]
Output: []
*/

function findDuplicates(nums){
    nums = nums.sort((a, b) => a - b);
    let output = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i - 1] == nums[i]){
            output.push(nums[i]);
        }
    }
    return output;
}

let nums1 = [4,3,2,7,8,2,3,1];
let nums2 = [1,1,2];
let nums3 = [1];

console.log(findDuplicates(nums1));
console.log(findDuplicates(nums2));
console.log(findDuplicates(nums3));
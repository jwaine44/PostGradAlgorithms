/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/

function thirdMax(nums){
    nums = nums.sort((a, b) => a - b);
    if(nums.length == 1){
        return nums[0];
    } else if(nums.length == 2){
        return nums[1];
    } else {
        let set = new Set(nums);
        let newNums = [...set];
        if(newNums.length == 2){
            return newNums[1];
        } else if(newNums.length == 1){
            return newNums[0];
        } else {
            return newNums[newNums.length - 3];
        }
    }
}

let nums1 = [3,2,1];
let nums2 = [1,2];
let nums3 = [2,2,3,1];

console.log(thirdMax(nums1));
console.log(thirdMax(nums2));
console.log(thirdMax(nums3));
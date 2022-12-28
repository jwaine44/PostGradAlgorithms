/*
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.

Example 1:
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
*/

function countKDifference(nums, k){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) == k){
                count++;
            }
        }
    }
    return count;
}

let nums1 = [1,2,2,1];
let nums2 = [1,3];
let nums3 = [3,2,1,5,4];
let nums4 = [10,2,10,9,1,6,8,9,2,8];

console.log(countKDifference(nums1, 1));
console.log(countKDifference(nums2, 3));
console.log(countKDifference(nums3, 2));
console.log(countKDifference(nums4, 5));
/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

Example 1:
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
*/

function divideArray(nums){
    nums = nums.sort((a, b) => a - b);
    for(let i = 0, j = 1; i < nums.length, j < nums.length; i += 2, j += 2){
        if(nums[i] !== nums[j]){
            return false;
        }
    }
    return true;
}

let nums1 = [3,2,3,2,2,2];
let nums2 = [1,2,3,4];

console.log(divideArray(nums1));
console.log(divideArray(nums2));
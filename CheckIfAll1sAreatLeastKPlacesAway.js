/*
Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

Example 1:
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
*/

function kLengthApart(nums, k){
    let indexes = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            indexes.push(i);
        }
    }
    for(let j = 0; j < indexes.length - 1; j++){
        if(Math.abs(indexes[j] - indexes[j + 1]) <= k){
            return false;
        }
    }
    return true;
}

let nums1 = [1,0,0,0,1,0,0,1];
let nums2 = [1,0,0,1,0,1];
let nums3 = [0,1,0,1];

console.log(kLengthApart(nums1, 2));
console.log(kLengthApart(nums2, 2));
console.log(kLengthApart(nums3, 1));
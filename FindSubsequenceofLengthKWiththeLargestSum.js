/*
You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.

Example 2:
Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation: 
The subsequence has the largest sum of -1 + 3 + 4 = 6.

Example 3:
Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7. 
Another possible subsequence is [4, 3].
*/

function maxSequence(nums, k){
    // let output = [];
    // nums = nums.sort((a, b) => b - a);
    // for(let i = 0; i < k; i++){
    //     output.push(nums[i]);
    // }
    // return output.sort((a, b) => a - b);

    let sorted = [...nums].sort((a,b) => a - b);
    let arr = sorted.splice(nums.length-k);
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(arr.includes(nums[i])){
            res.push(nums[i]);
            arr.splice(arr.indexOf(nums[i]), 1);
        }
    }
    return res;
}

let nums1 = [2,1,3,3];
let nums2 = [-1,-2,3,4];
let nums3 = [3,4,3,3];

console.log(maxSequence(nums1, 2));
console.log(maxSequence(nums2, 3));
console.log(maxSequence(nums3, 2));
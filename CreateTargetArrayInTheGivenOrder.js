/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Example 3:
Input: nums = [1], index = [0]
Output: [1]
*/

function createTargetArray(nums, index){
    let output = [];
    for(let i = 0; i < nums.length; i++){
        output.splice(index[i], 0, nums[i]);
    }
    return output;
}

let nums1 = [0,1,2,3,4];
let nums2 = [1,2,3,4,0];
let nums3 = [1];
let index1 = [0,1,2,2,1];
let index2 = [0,1,2,3,0];
let index3 = [0];

console.log(createTargetArray(nums1, index1));
console.log(createTargetArray(nums2, index2));
console.log(createTargetArray(nums3, index3));
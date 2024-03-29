/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

function intersection(nums1, nums2){
    nums1 = Array.from(new Set(nums1.sort((a, b) => a - b)));
    nums2 = Array.from(new Set(nums2.sort((a, b) => a - b)));
    let output = [];
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i])){
            output.push(nums1[i]);
        }
    }
    return output;
}

let nums11 = [1,2,2,1];
let nums12 = [2,2];
let nums21 = [4,9,5];
let nums22 = [9,4,9,8,4];

console.log(intersection(nums11, nums12));
console.log(intersection(nums21, nums22));
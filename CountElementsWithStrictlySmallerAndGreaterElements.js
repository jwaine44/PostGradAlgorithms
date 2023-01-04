/*
Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

Example 1:
Input: nums = [11,7,2,15]
Output: 2
Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

Example 2:
Input: nums = [-3,3,3,90]
Output: 2
Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
*/

function countElements(nums){
    let count = 0;
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[0] && nums[i] !== nums[nums.length - 1]){
            count++;
        }
    }
    return count;
}

let nums1 = [11,7,2,15];
let nums2 = [-3,3,3,90];
let nums3 = [-71,-71,93,-71,40];
let nums4 = [-89,39,39,-89,39,39];

console.log(countElements(nums1));
console.log(countElements(nums2));
console.log(countElements(nums3));
console.log(countElements(nums4));
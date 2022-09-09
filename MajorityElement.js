/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums) {
    let i = 0;
    let count = 0;
    let map = {};
    for(let j = 0; j < nums.length; j++){
        if(map[nums[j]]){
            map[nums[j]] += 1;
        } else {
            map[nums[j]] = 1;
        }
        if(map[nums[j]] > count){
            count = map[nums[j]]
            i = nums[j];
        }
    }
    return i;
}

let nums1 = [3,2,3];
let nums2 = [2,2,1,1,1,2,2];

console.log(majorityElement(nums1));
console.log(majorityElement(nums2));
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
*/

function findDisappearedNumbers(nums){
    let arr = [];
    let result = [];
    for(let i = 1; i <= nums.length; i++){
        arr.push(i);
    }
    for(let i = 0; i < nums.length; i++){
        if(!nums.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

let nums1 = [4,3,2,7,8,2,3,1];
let nums2 = [1, 1];

console.log(findDisappearedNumbers(nums1));
console.log(findDisappearedNumbers(nums2));
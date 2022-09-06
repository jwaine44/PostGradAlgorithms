/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
        } else if(nums[i] < target && nums[i + 1] > target){
            return i + 1;
        } else if(target < nums[0]){
            return 0;
        }
    }
    return nums.length;
}

let nums1 = [1,3,5,6];

console.log(searchInsert(nums1, 5));
console.log(searchInsert(nums1, 2));
console.log(searchInsert(nums1, 7));
console.log(searchInsert(nums1, 0));
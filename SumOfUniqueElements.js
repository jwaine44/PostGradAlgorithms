/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/

function sumOfUnique(nums){
    let obj = {};
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]] === undefined){
            sum += nums[i];
            obj[nums[i]] = 1;
        } else if(obj[nums[i]] === 1){
            sum -= nums[i];
            obj[nums[i]] = -1;
        }
    }
    return sum;
}

let nums1 = [1,2,3,2];
let nums2 = [1,1,1,1,1];
let nums3 = [1,2,3,4,5];
let nums4 = [10,6,9,6,9,6,8,7];

console.log(sumOfUnique(nums1));
console.log(sumOfUnique(nums2));
console.log(sumOfUnique(nums3));
console.log(sumOfUnique(nums4));
/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]
*/

function sortArrayByParity(nums){
    let odds = [];
    let evens = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    return evens.concat(odds);
}

let nums1 = [3,1,2,4];
let nums2 = [0];

console.log(sortArrayByParity(nums1));
console.log(sortArrayByParity(nums2));
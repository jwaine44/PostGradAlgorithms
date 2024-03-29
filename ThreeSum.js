/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

function threeSum(nums){
    nums = nums.sort((a, b) => a - b);
    let output = [];
    for (let i = 0; i < nums.length; i++){
        if (i > 0 && nums[i - 1] === nums[i]){
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            } else if(sum > 0){
                right--;
            } else {
                left++;
            }
        }
    }
    return output;
}

let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [0,1,1];
let nums3 = [0,0,0];
let nums4 = [0,0,0,0];

console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));
console.log(threeSum(nums4));
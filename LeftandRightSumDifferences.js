/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

Example 1:
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Example 2:
Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
*/

function leftRightDifference(nums){
    let rightSumArr = new Array(nums.length).fill(0);
    let leftSumArr = new Array(nums.length).fill(0);
    let output = [];
    for(let i = 0; i < nums.length; i++){
        let rightSum = 0;
        let leftSum = 0;
        for(let j = i + 1; j < nums.length; j++){
            rightSum += nums[j];
            if(j == nums.length - 1){
                rightSumArr[i] = rightSum;
            }
        }
        for(let k = i - 1; k >= 0; k--){
            leftSum += nums[k];
            if(k <= 0){
                leftSumArr[i] = leftSum;
            }
        }
    }
    for(let l = 0; l < nums.length; l++){
        output.push(Math.abs(leftSumArr[l] - rightSumArr[l]))
    }
    return output;
}

let nums1 = [10,4,8,3];
let nums2 = [1];

console.log(leftRightDifference(nums1));
console.log(leftRightDifference(nums2));
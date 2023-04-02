/*
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

Example 1:
Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.

Example 2:
Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.
*/

function minNumber(nums1, nums2){
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i])){
            return nums1[i];
        }
    }
    return Number(Math.min(nums1[0], nums2[0]).toString() + Math.max(nums1[0], nums2[0]).toString());
}

let nums11 = [4,1,3];
let nums12 = [5,7];
let nums21 = [3,5,2,6];
let nums22 = [3,1,7];

console.log(minNumber(nums11, nums12));
console.log(minNumber(nums21, nums22));
/*
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

Example 1:
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Example 2:
Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Example 3:
Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
*/

function twoOutOfThree(nums1, nums2, nums3){
    let result = [];
    let output = [];
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) || nums3.includes(nums1[i])){
            result.push(nums1[i]);
        }
    }
    for(let j = 0; j < nums2.length; j++){
        if(nums1.includes(nums2[j]) || nums3.includes(nums2[j])){
            result.push(nums2[j]);
        }
    }
    result = result.sort((a, b) => a - b);
    for(let k = 0; k < result.length; k++){
        output.push(result[k]);
        if(result[k] == result[k + 1]){
            output.pop();
        }
    }
    return output;
}

let nums11 = [1,1,3,2];
let nums12 = [2,3];
let nums13 = [3];
let nums21 = [3,1];
let nums23 = [1,2];
let nums31 = [1,2,2];
let nums32 = [4,3,3];
let nums33 = [5];

console.log(twoOutOfThree(nums11, nums12, nums13));
console.log(twoOutOfThree(nums21, nums12, nums23));
console.log(twoOutOfThree(nums31, nums32, nums33));
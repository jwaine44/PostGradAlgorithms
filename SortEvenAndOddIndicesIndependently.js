/*
You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.

Example 1:
Input: nums = [4,1,2,3]
Output: [2,3,4,1]
Explanation: 
First, we sort the values present at odd indices (1 and 3) in non-increasing order.
So, nums changes from [4,1,2,3] to [4,3,2,1].
Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
So, nums changes from [4,1,2,3] to [2,3,4,1].
Thus, the array formed after rearranging the values is [2,3,4,1].

Example 2:
Input: nums = [2,1]
Output: [2,1]
Explanation: 
Since there is exactly one odd index and one even index, no rearrangement of values takes place.
The resultant array formed is [2,1], which is the same as the initial array. 
*/

function sortEvenOdd(nums){
    if(nums.length == 2){
        return nums;
    }
    let odds = [];
    let evens = [];
    for(let i = 0; i < nums.length; i++){
        if(i % 2 == 0){
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    odds = odds.sort((a, b) => b - a);
    evens = evens.sort((a, b) => a - b);
    let output = [];
    for(let k = 0; k < nums.length / 2; k++){
        output.push(evens[k]);
        output.push(odds[k]);
        if(output.includes(undefined)){
            output.pop();
        }
    }
    return output;
}

let nums1 = [4,1,2,3];
let nums2 = [2,1];
let nums3 = [5,39,33,5,12,27,20,45,14,25,32,33,30,30,9,14,44,15,21];

console.log(sortEvenOdd(nums1));
console.log(sortEvenOdd(nums2));
console.log(sortEvenOdd(nums3));
/*
You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:

0 <= i < j < k < nums.length
nums[i], nums[j], and nums[k] are pairwise distinct.
In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
Return the number of triplets that meet the conditions.

Example 1:
Input: nums = [4,4,2,4,3]
Output: 3
Explanation: The following triplets meet the conditions:
- (0, 2, 4) because 4 != 2 != 3
- (1, 2, 4) because 4 != 2 != 3
- (2, 3, 4) because 2 != 4 != 3
Since there are 3 triplets, we return 3.
Note that (2, 0, 4) is not a valid triplet because 2 > 0.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: No triplets meet the conditions so we return 0.
*/

function unequalTriplets(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]){
                    count++;
                }
            }
        }
    }
    return count;
}

let nums1 = [4,4,2,4,3];
let nums2 = [1,1,1,1,1];
let nums3 = [2,1,1];

console.log(unequalTriplets(nums1));
console.log(unequalTriplets(nums2));
console.log(unequalTriplets(nums3));
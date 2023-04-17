/*
You are given two 0-indexed integer arrays nums and divisors.

The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

Return the integer divisors[i] with the maximum divisibility score. If there is more than one integer with the maximum score, return the minimum of them.

Example 1:
Input: nums = [4,7,9,3,9], divisors = [5,2,3]
Output: 3
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
Since divisors[2] has the maximum divisibility score, we return it.

Example 2:
Input: nums = [20,14,21,10], divisors = [5,7,5]
Output: 5
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).

Example 3:
Input: nums = [12], divisors = [10,16]
Output: 10
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 10.
The divisibility score of divisors[1] is 0 since no number in nums is divisible by 16.
Since divisors[0] and divisors[1] both have the maximum divisibility score, we return the minimum of them (i.e., divisors[0]).
*/

function maxDivScore(nums, divisors){
    let maxCount = -1;
    let maxDivisor = -1;
    for(let i = 0; i < divisors.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] % divisors[i] == 0){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            maxDivisor = divisors[i];
        } else if(count == maxCount){
            maxDivisor = Math.min(maxDivisor, divisors[i]);
        }
    }
    return maxDivisor;
}

let nums1 = [4,7,9,3,9];
let nums2 = [20,14,21,10];
let nums3 = [12];
let nums4 = [56,22,79,41,8,39,81,59,74,14,45,49,15,10,28,16,77,22,65,8,36,79,94,44,80,72,8,96,78];
let divisors1 = [5,2,3];
let divisors2 = [5,7,5];
let divisors3 = [10,16];
let divisors4 = [39,92,69,55,9,44,26,76,40,77,16,69,40,64,12,48,66,7,59,10,33,72,97,60,79,68,25,63];

console.log(maxDivScore(nums1, divisors1));
console.log(maxDivScore(nums2, divisors2));
console.log(maxDivScore(nums3, divisors3));
console.log(maxDivScore(nums4, divisors4));
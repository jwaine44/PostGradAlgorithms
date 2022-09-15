/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0
*/

function addDigits(num){
    if(num < 10){
        return num;
    } else {
        let nums = num.toString().split('');
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += Number(nums[i]);
        }
        return addDigits(sum);
    }
}

console.log(addDigits(38));
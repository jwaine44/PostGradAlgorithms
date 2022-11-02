/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Example 1:
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:
Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:
Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
*/

function maximum69Number(num){
    num = num.toString().split("");
    for(let i = 0; i < num.length; i++){
        if(num[i] == 6){
            num[i] = 9;
            break;
        }
    }
    return Number(num.join(""));
}

let num1 = 9669;
let num2 = 9996;
let num3 = 9999;
let num4 = 696;

console.log(maximum69Number(num1));
console.log(maximum69Number(num2));
console.log(maximum69Number(num3));
console.log(maximum69Number(num4));
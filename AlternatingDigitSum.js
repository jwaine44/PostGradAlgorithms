/*
You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.

Example 1:
Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.

Example 2:
Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1.

Example 3:
Input: n = 886996
Output: 0
Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
*/

function alternateDigitSum(n){
    n = n.toString();
    let sum = 0;
    if(n[0] > 0){
        sum += Number(n[0]);
    } else {
        sum += Number(-n[0]);
    }
    for(let i = 1; i < n.length; i++){
        if(i % 2 == 0){
            sum += Number(n[i]);
        } else if(i % 2 == 1){
            sum -= Number(n[i]);
        }
    }
    return sum;
}

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));
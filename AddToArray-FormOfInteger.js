/*
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

Example 1:
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
*/

function addToArrayForm(num, k){
    let total = BigInt(num.join("")) + BigInt(k);
    return total.toString().split("");
}

let num1 = [1,2,0,0];
let num2 = [2,7,4];
let num3 = [2,1,5];
let num4 = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];

console.log(addToArrayForm(num1, 34));
console.log(addToArrayForm(num2, 181));
console.log(addToArrayForm(num3, 806));
console.log(addToArrayForm(num4, 516));
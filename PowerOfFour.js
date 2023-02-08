/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true
*/

function isPowerOfFour(n){
    for(let j = 0; j <= n; j++){
        let num = Math.pow(4, j);
        if(num == n){
            return true;
        }
        if(num > n){
            return false;
        }
    }
    return false;
}

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(129140162));
console.log(isPowerOfFour(-2147483648));
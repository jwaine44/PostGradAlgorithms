/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false
*/

function isPowerOfTwo(n){
    for(let j = 0; j <= n; j++){
        let num = Math.pow(2, j);
        if(num == n){
            return true;
        }
        if(num > n){
            return false;
        }
    }
    return false;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
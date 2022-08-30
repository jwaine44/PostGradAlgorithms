/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let xString = x.toString();
    for(let i = 0; i < xString.length / 2; i++){
        if(xString[i] !== xString[xString.length - 1 - i]){
            return false;
        }
    }
    return true;
}

let x1 = 121;
let x2 = -121;
let x3 = 10;
let x4 = 1000021;
console.log(isPalindrome(x1));
console.log(isPalindrome(x2));
console.log(isPalindrome(x3));
console.log(isPalindrome(x4));
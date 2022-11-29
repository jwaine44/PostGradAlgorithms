/*
Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Example 1:
Input: n = 987
Output: "987"

Example 2:
Input: n = 1234
Output: "1.234"
*/

function thousandSeparator(n){
    return n.toLocaleString('de-DE');
}

console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
/*
You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

Return the largest possible value of num after any number of swaps.

Example 1:
Input: num = 1234
Output: 3412
Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.

Example 2:
Input: num = 65875
Output: 87655
Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
Swap the first digit 5 with the digit 7, this results in the number 87655.
Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
*/

function largestInteger(num){
    num = num.toString().split("");
    let odds = [];
    let evens = [];
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            evens.push(Number(num[i]));
        } else {
            odds.push(Number(num[i]));
        }
    }
    evens = evens.sort((a, b) => a - b);
    odds = odds.sort((a, b) => a - b);
    let output = [];
    for(let j = 0; j < num.length; j++){
        if(num[j] % 2 == 0){
            output.push(evens.pop());
        } else {
            output.push(odds.pop());
        }
    }
    return output.join("");
}

let num1 = 1234;
let num2 = 65875;

console.log(largestInteger(num1));
console.log(largestInteger(num2));
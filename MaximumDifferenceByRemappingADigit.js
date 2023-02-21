/*
You are given an integer num. You know that Danny Mittal will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

Return the difference between the maximum and minimum values Danny can make by remapping exactly one digit in num.

Notes:

When Danny remaps a digit d1 to another digit d2, Danny replaces all occurrences of d1 in num with d2.
Danny can remap a digit to itself, in which case num does not change.
Danny can remap different digits for obtaining minimum and maximum values respectively.
The resulting number after remapping can contain leading zeroes.
We mentioned "Danny Mittal" to congratulate him on being in the top 10 in Weekly Contest 326.

Example 1:
Input: num = 11891
Output: 99009
Explanation: 
To achieve the maximum value, Danny can remap the digit 1 to the digit 9 to yield 99899.
To achieve the minimum value, Danny can remap the digit 1 to the digit 0, yielding 890.
The difference between these two numbers is 99009.

Example 2:
Input: num = 90
Output: 99
Explanation:
The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
Thus, we return 99.
*/

function minMaxDifference(num){
    let numToLoop = num.toString();
    let max = 9;
    for(let i = 0; i < numToLoop.length; i++){
        if(numToLoop[i] !== "9"){
            max = numToLoop[i];
            break;
        }
    }
    let maxOutput = [];
    let minOutput = [];
    for(let j = 0; j < numToLoop.length; j++){
        maxOutput.push(Number(numToLoop[j]));
        minOutput.push(Number(numToLoop[j]));
        if(Number(numToLoop[j]) == Number(max)){
            maxOutput.pop();
            maxOutput.push(9);
        }
        if(Number(numToLoop[j]) == Number(numToLoop[0])){
            minOutput.pop();
            minOutput.push(0);
        }
    }
    return Number(maxOutput.join("")) - Number(minOutput.join(""));
}

console.log(minMaxDifference(11891));
console.log(minMaxDifference(90));
console.log(minMaxDifference(867));
/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/

function countBits(n){
    let bitArr = [];
    for(let i = 0; i <= n; i++){
        bitArr.push(i.toString(2));
    }
    let count = 0;
    let output = [];
    for(let j = 0; j < bitArr.length; j++){
        count = 0;
        if(bitArr[j].includes(1)){
            for(let k = 0; k < bitArr[j].length; k++){
                if(bitArr[j][k] == 1){
                    count++;
                }
            }
            output.push(count);
        } else {
            output.push(0);
        }
    }
    return output;
}

console.log(countBits(2));
console.log(countBits(5));
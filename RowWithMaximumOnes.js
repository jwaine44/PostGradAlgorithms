/*
Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

Return an array containing the index of the row, and the number of ones in it.

Example 1:
Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 

Example 2:
Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].

Example 3:
Input: mat = [[0,0],[1,1],[0,0]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].
*/

function rowAndMaximumOnes(mat){
    let max = -1;
    let idx = Infinity;
    let temp = Infinity;
    for(let i = 0; i < mat.length; i++){
        let count = 0;
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] == 1){
                count++;
            }
        }
        if(count > max){
            max = count;
            temp = i;
        }
        if(count == max){
            idx = Math.min(i, temp);
        }
    }
    return [idx, max];
}

let mat1 = [[0,1],[1,0]];
let mat2 = [[0,0,0],[0,1,1]];
let mat3 = [[0,0],[1,1],[0,0]];
let mat4 = [[0,0],[0,0]];
let mat5 = [[0,0,0],[0,1,1]];

console.log(rowAndMaximumOnes(mat1));
console.log(rowAndMaximumOnes(mat2));
console.log(rowAndMaximumOnes(mat3));
console.log(rowAndMaximumOnes(mat4));
console.log(rowAndMaximumOnes(mat5));
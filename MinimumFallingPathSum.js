/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Example 1:
Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

Example 2:
Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.
*/

function minFallingPathSum(matrix){
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            let leftCol = Math.max(0, j - 1);
            let rightCol = Math.min(matrix.length - 1, j + 1);
            matrix[i][j] += Math.min(matrix[i - 1][leftCol], matrix[i - 1][j], matrix[i - 1][rightCol]);
        }   
    }
    return Math.min(...matrix[matrix.length - 1]);
}

let matrix1 = [[2,1,3],[6,5,4],[7,8,9]];
let matrix2 = [[-19,57],[-40,-5]];

console.log(minFallingPathSum(matrix1));
console.log(minFallingPathSum(matrix2));
/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example 1:
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:
Input: grid = [[1]]
Output: 4

Example 3:
Input: grid = [[1,0]]
Output: 4
*/

function islandPerimeter(grid){
    let perimeter = 0
    let row = grid.length;
    let col = grid[0].length;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                if(i === 0 || i > 0 && grid[i - 1][j] === 0){
                    perimeter++;
                }
                if(i === row - 1 || i < row - 1 && grid[i + 1][j] === 0){
                    perimeter++;
                } 
                if(j === 0 || j > 0 && grid[i][j - 1] === 0){
                    perimeter++;
                } 
                if(j === col - 1 || j < col && grid[i][j + 1] === 0){
                    perimeter++;
                } 
            }
        }
    }
    
    return perimeter
}

let grid1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
let grid2 = [[1]];
let grid3 = [[1, 0]];

console.log(islandPerimeter(grid1));
console.log(islandPerimeter(grid2));
console.log(islandPerimeter(grid3));
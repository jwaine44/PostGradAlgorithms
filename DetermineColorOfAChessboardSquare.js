/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Example 1:
Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

Example 2:
Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

Example 3:
Input: coordinates = "c7"
Output: false
*/

function squareIsWhite(coordinates){
    let startWithBlacks = ["a", "c", "e", "g"];
    let startWithWhites = ["b", "d", "f", "h"];
    if(startWithBlacks.includes(coordinates[0]) && coordinates[1] % 2 == 1 || startWithWhites.includes(coordinates[0]) && coordinates[1] % 2 == 0){
        return false;
    }
    return true;
}

let c1 = "a1";
let c2 = "h3";
let c3 = "c7";

console.log(squareIsWhite(c1));
console.log(squareIsWhite(c2));
console.log(squareIsWhite(c3));
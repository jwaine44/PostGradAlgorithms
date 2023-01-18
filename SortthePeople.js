/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/

function sortPeople(names, heights){
    let map = new Map();
    let output = [];
    for(let i = 0; i < names.length; i++){
        map.set(heights[i], names[i]);
    }
    heights = heights.sort((a, b) => b - a);
    for(let j = 0; j < heights.length; j++){
        output.push(map.get(heights[j]));
    }
    return output;
}

let names1 = ["Mary","John","Emma"];
let names2 = ["Alice","Bob","Bob"];
let heights1 = [180,165,170];
let heights2 = [155,185,150];

console.log(sortPeople(names1, heights1));
console.log(sortPeople(names2, heights2));
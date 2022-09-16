/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

function maxArea(height){
    let area = 0;
    let MaxArea = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j){
        area = (j - i) * Math.min(height[i], height[j]);
        if(area > MaxArea){
            MaxArea = area;
        }
        if(height[i] <= height[j]){
            i++;
        } else {
            j--;
        }
    }
    return MaxArea
}

let height1 = [1,8,6,2,5,4,8,3,7];
let height2 = [1,1];

console.log(maxArea(height1));
console.log(maxArea(height2));
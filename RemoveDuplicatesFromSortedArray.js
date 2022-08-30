/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(nums){
    if(nums.length == 0){
        // Checks if the length is 0, if it is return 0
        return 0;
    }
    // Pointer initialized as 0, this is the index at which we want to switch our non-duplicate values
    let pointer = 0;
    for(let i = 1; i < nums.length; i++){
        // Because we only care from index 0 to n, check if the pointer is not equal to the current index
        if(nums[i] !== nums[pointer]){
            // If the pointer isn't equal, this means it is a unique value and we can increment our pointer
            pointer++;
            // Modify the array (in place)
            nums[pointer] = nums[i];
        }
    }
    // Returns the amount of times the pointer has changed + 1 because we started at 0
    return pointer + 1;
}

let nums1 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1));
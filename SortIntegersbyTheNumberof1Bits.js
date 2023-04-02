/*
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

Example 1:
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
*/

function numberOfBits(num){
    let binary = num.toString(2).match(/1/g);
    return binary ? binary.length : 0;
}

function sortByBits(arr){
    return arr.sort((a, b) => numberOfBits(a) - numberOfBits(b) || a - b);
}

let arr1 = [0,1,2,3,4,5,6,7,8];
let arr2 = [1024,512,256,128,64,32,16,8,4,2,1];

console.log(sortByBits(arr1));
console.log(sortByBits(arr2));
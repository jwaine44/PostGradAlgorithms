/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

function canPlaceFlowers(flowerbed, n){
    let newFlowers = n;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed.length == 1 && flowerbed[0] == 0 || flowerbed[0] == 0 && flowerbed[1] == 0){
            flowerbed[0] = 1;
            newFlowers--;
        }
        if(flowerbed[i] == 1 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0){
            newFlowers++;
        }
        if(flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0){
            flowerbed[flowerbed.length - 1] = 1;
            newFlowers--;
        }
        if(flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0){
            flowerbed[i] = 1;
            newFlowers--;
        }
    }
    return newFlowers <= 0;
}

let fb1 = [1,0,0,0,1];
let fb2 = [1,0,0,0,0,1];
let fb3 = [1,0,1,0,1,0,1];
let fb4 = [0,0,1,0,1];

console.log(canPlaceFlowers(fb1, 1));
console.log(canPlaceFlowers(fb1, 2));
console.log(canPlaceFlowers(fb2, 2));
console.log(canPlaceFlowers(fb3, 0));
console.log(canPlaceFlowers(fb4, 1));
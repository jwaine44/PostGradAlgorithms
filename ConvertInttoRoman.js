/*
Given an integer, convert it to a roman numeral.

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
*/

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousands = ["", "M", "MM", "MMM"];
    
    return (thousands[Math.floor(num / 1000)] + hundreds[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10]);
}; 

console.log(intToRoman(58));
console.log(intToRoman(3));
console.log(intToRoman(1994));
console.log(intToRoman(300));

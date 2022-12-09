/*
You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are different.

Example 1:
Input: word = "a123bc34d8ef34"
Output: 3
Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.

Example 2:
Input: word = "leet1234code234"
Output: 2

Example 3:
Input: word = "a1b01c001"
Output: 1
Explanation: The three integers "1", "01", and "001" all represent the same integer because
the leading zeros are ignored when comparing their decimal values.
*/

function numDifferentIntegers(word){
    let result = "";
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(letters.includes(word[i])){
            result += " ";
        } else {
            result += word[i];
        }
    }
    result = result.split(" ").sort((a, b) => a - b);
    for(let j = 0; j < result.length; j++){
        if(Number(result[j]) && parseInt(result[j], 10) !== parseInt(result[j + 1], 10)){
            count++;
        }
    }
    if(result[0] === "0"){
        count = 1;
    }
    return count;
}

let word1 = "a123bc34d8ef34";
let word2 = "leet1234code234";
let word3 = "a1b01c001";
let word4 = "0a0";

console.log(numDifferentIntegers(word1));
console.log(numDifferentIntegers(word2));
console.log(numDifferentIntegers(word3));
console.log(numDifferentIntegers(word4));
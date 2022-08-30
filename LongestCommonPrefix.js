

function longestCommonPrefix(strs) {
    let output = "";
    if(strs === null || strs.length === 0){
        return output;
    }
    for (let i = 0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 
        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char){
                return output;
            }
        }
        output += char;
    }
    return output;
};

let strs = ["flower","flow","flight"];
let strs2 = ["dog","racecar","car"];
let strs3 = ["flower","flower","flower","flower"];

// console.log(strs[0][0]);

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));

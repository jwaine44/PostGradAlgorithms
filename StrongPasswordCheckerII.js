/*
A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
Given a string password, return true if it is a strong password. Otherwise, return false.

Example 1:
Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.

Example 2:
Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

Example 3:
Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.
*/

function strongPasswordCheckerII(password){
    let answer = [false, false, false, false];
    let uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let specialChars = "!@#$%^&*()-+";
    if(password.length < 8){
        return false;
    } else {
        for(let i = 0; i < password.length; i++){
            if(uppers.includes(password[i])){
                answer[0] = true;
            } 
            if(lowers.includes(password[i])){
                answer[1] = true;
            }
            if(numbers.includes(Number(password[i]))){
                answer[2] = true;
            }
            if(specialChars.includes(password[i])){
                answer[3] = true;
            }
            if(password[i] == password[i + 1]){
                return false;
            }
        }
    }
    if(answer.includes(false)){
        return false;
    } else {
        return true;
    }
}

let password1 = "IloveLe3tcode!";
let password2 = "Me+You--IsMyDream";
let password3 = "1aB!";

console.log(strongPasswordCheckerII(password1));
console.log(strongPasswordCheckerII(password2));
console.log(strongPasswordCheckerII(password3));
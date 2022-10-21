/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

function defangIPaddr(address){
    address = address.split("");
    for(let i = 0; i < address.length; i++){
        if(address[i] == "."){
            address[i] = "[.]";
        }
    }
    return address.join("");
}

let address1 = "1.1.1.1";
let address2 = "255.100.50.0";

console.log(defangIPaddr(address1));
console.log(defangIPaddr(address2));
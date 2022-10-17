/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.

Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
*/

function toGoatLatin(sentence){
    const vowel = {
        "a": "a",
        "e": "e",
        "i": "i",
        "o": "o",
        "u": "u",
        "A": "A",
        "E": "E",
        "I": "I",
        "O": "O",
        "U": "U",
    }
    let output = '';
    sentence = sentence.split(' ');
    for(let i = 0; i < sentence.length; i++){
        let word = sentence[i];
        if(vowel[word[0]]){
            word += "ma";
        } else {
            word = word.substr(1, word.length) + word[0] + "ma";
        }
        for(let j = 0; j <= i; j++){
            word += "a";
        }
        output += word + (i !== sentence.length - 1 ? ' ' : '');
    }
    
    return output;
}

let sentence1 = "I speak Goat Latin";
let sentence2 = "The quick brown fox jumped over the lazy dog";

console.log(toGoatLatin(sentence1));
console.log(toGoatLatin(sentence2));
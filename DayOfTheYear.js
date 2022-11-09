/*
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

Example 1:
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

Example 2:
Input: date = "2019-02-10"
Output: 41
*/

function dayOfYear(date){
    let output = 0;
    // January - 31
    if(Number(date[5] + date[6]) == 2){
        output += 31;
    }
    // February - 28
    if(Number(date[5] + date[6]) == 3){
        output += 59;
    }
    // March - 31
    if(Number(date[5] + date[6]) == 4){
        output += 90;
    }
    // April - 30
    if(Number(date[5] + date[6]) == 5){
        output += 120;
    }
    // May - 31
    if(Number(date[5] + date[6]) == 6){
        output += 151;
    }
    // June - 30
    if(Number(date[5] + date[6]) == 7){
        output += 181;
    }
    // July - 31
    if(Number(date[5] + date[6]) == 8){
        output += 212;
    }
    // August - 31
    if(Number(date[5] + date[6]) == 9){
        output += 243;
    }
    // September - 30
    if(Number(date[5] + date[6]) == 10){
        output += 273;
    }
    // October - 31
    if(Number(date[5] + date[6]) == 11){
        output += 304;
    }
    // November - 30
    if(Number(date[5] + date[6]) == 12){
        output += 334;
    }
    // Leap years, 1700, 1800, 1900 are not leap years
    if(Number(date[5] + date[6]) !== 1 && Number(date[5] + date[6]) !== 2 && Number(date[0] + date[1] + date[2] + date[3]) % 4 == 0 && Number(date[0] + date[1] + date[2] + date[3]) !== 1700 && Number(date[0] + date[1] + date[2] + date[3]) !== 1800 && Number(date[0] + date[1] + date[2] + date[3]) !== 1900){
        output += 1;
    }

    return output + (Number(date[8] + date[9]));
}

let date1 = "2019-01-09";
let date2 = "2019-02-10";
let date3 = "2004-03-01";
let date4 = "2012-01-02";
let date5 = "1900-05-02";

console.log(dayOfYear(date1));
console.log(dayOfYear(date2));
console.log(dayOfYear(date3));
console.log(dayOfYear(date4));
console.log(dayOfYear(date5));

/*
January - 31
February - 28
March - 31
April - 30
May - 31
June - 30
July - 31
August - 31
September - 30
October - 31
November - 30
December - 31
*/
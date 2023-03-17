/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

Example 1:
Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

Example 2:
Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
*/

function findWinners(matches){
    let winnerContainer = [];
    let loserContainer = [];
    let winners = [];
    let oneLosers = [];
    for(let i = 0; i < matches.length; i++){
        winnerContainer.push(matches[i][0]);
        loserContainer.push(matches[i][1]);
    }
    for(let j = 0; j < winnerContainer.length; j++){
        if(!loserContainer.includes(winnerContainer[j])){
            winners.push(winnerContainer[j]);
        }
    }
    let map = new Map();
    for(let i = 0; i < loserContainer.length; i++){
        map.set(loserContainer[i], (map.get(loserContainer[i]) ?? 0) + 1);
    }
    for(let [key, val] of map){
        if(val == 1){
            oneLosers.push(key);
        }
    }
    return [Array.from(new Set(winners)).sort((a, b) => a - b), oneLosers.sort((a, b) => a - b)];
}

/*
function findWinners(matches){
    let lost = {};
    for (let [winner, loser] of matches) {
        lost[winner] = (lost[winner] || 0);
        lost[loser] = (lost[loser] || 0) + 1;
    }
    let res = [[], []];
    for (let player in lost) {
        if(lost[player] === 0){
            res[0].push(+player);
        }
        else if(lost[player] === 1){
            res[1].push(+player);
        }
    }
    return res;
}
*/

let matches1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
let matches2 = [[2,3],[1,3],[5,4],[6,4]];

console.log(findWinners(matches1));
console.log(findWinners(matches2));
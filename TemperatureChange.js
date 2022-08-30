// Returns the highest fluctuation between temperatures between two days
// Example: [70, 75, 84] should return 9 as the highest raise of temperatures (84 - 75)

function highestFluctuation(arr){
    let fluctuation = 0;
    for(let i = 0; i < arr.length; i++){
        let currFluctuation = arr[i + 1] - arr[i];
        if(currFluctuation > fluctuation && currFluctuation > 0){
            fluctuation = currFluctuation;
        }
    }
    return fluctuation;
}

let tempArr = [70, 75, 84];
console.log(highestFluctuation(tempArr));
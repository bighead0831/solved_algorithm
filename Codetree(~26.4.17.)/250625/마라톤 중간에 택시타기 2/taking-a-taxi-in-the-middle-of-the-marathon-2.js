const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.
let minSum = 4000*100; // initialize minSum to Max sum of distance
for(let i=1; i<arr.length-1; i++) { // search to every check points without SP and LP
    let sumDistance = 0;
    let cpj = arr[i]; // check point to jump

    let jArr = []; // initialize result to jumped
    for(let j=0; j<arr.length; j++) {
        if(j!=i) jArr.push(arr[j]);
    }

    for(let j=1; j<jArr.length; j++) {
        sumDistance += Math.abs(jArr[j][0]-jArr[j-1][0]) + Math.abs(jArr[j][1]-jArr[j-1][1]);
    }
    minSum = Math.min(minSum, sumDistance);
}
console.log(minSum);
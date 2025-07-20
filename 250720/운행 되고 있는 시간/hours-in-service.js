const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let working = new Array(1001).fill(0);
let maxWorkTime = 0;

for(let i=0; i<n; i++) {
    let working = new Array(1001).fill(0);
    for(let j=0; j<n; j++) {
        if(i===j) continue;
        else
            for(let k=segments[j][0]; k<segments[j][1]; k++) 
                working[k] += 1;
    }

    let workTime = 0;
    for(let j=0; j<1001; j++)
        workTime += working[j]!=0 ? 1 : 0;

    maxWorkTime = Math.max(maxWorkTime, workTime);
}

console.log(maxWorkTime);
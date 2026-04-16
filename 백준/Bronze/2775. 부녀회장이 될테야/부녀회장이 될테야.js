const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
const tests = input.slice(1);

let MAX = 15;
let mension = new Array(MAX).fill(0).map(()=>Array(MAX).fill(0));

for(let i=0; i<MAX; i++) mension[0][i] = i+1;

for(let i=0; i<MAX; i++) mension[i][0] = 1;


for(let i=1; i<MAX; i++) {
    for(let j=1; j<MAX; j++) {
        mension[i][j] = mension[i-1][j]+mension[i][j-1];
    }
}

for(let i=0; i<tests.length/2; i++) {
    let k = Number(tests[i*2]); // story
    let n = Number(tests[i*2+1]); // room
    console.log(mension[k][n-1]);
}
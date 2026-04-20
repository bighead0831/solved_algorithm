const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

let maxCnt = 0;
for(let i=1; i<=1000; i++) {
    let cnt = 0;
    let isSink = 0;
    for(let j=0; j<n; j++) {
        if(h[j]>i && isSink===0) {
            cnt++;
            isSink=1;
        } else if(h[j]<=i) isSink=0;
    }
    maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

let arr = Array(100).fill(0);
for(let i=0; i<n; i++) {
    for(let j=segments[i][0]; j<=segments[i][1]; j++) {
        arr[j] += 1;
    }
}

console.log(Math.max(...arr));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// 선분 놓기
let arr = Array(200).fill(0);
for(let i=0; i<n; i++) {
    for(let j=segments[i][0]; j<segments[i][1]; j++) {
        arr[j+100] += 1;
    }
}

// 가장 많이 겹치는 구간에서의 선분 수
let pileMax = Math.max(...arr);
console.log(pileMax);
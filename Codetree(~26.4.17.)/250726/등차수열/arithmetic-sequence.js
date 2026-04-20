const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let maxCnt = 0;
for(let k=0; k<100; k++) {
    let cnt = 0;
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            if(k>=arr[i] && k>=arr[j]) continue;
            if(k<=arr[i] && k<=arr[j]) continue;

            if(Math.abs(k-arr[i]) === Math.abs(k-arr[j]))
                cnt++;
        }
    }

    maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
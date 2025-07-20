const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let cnt = 0;
for(let i=0; i<n-1; i++) {
    let touched = 0;
    let [x1, x2] = segments[i];
    for(let j=0; j<n; j++) {
        if(i===j) continue; // i와 (i를 제외한 모든 선분) 확인

        let [cx1, cx2] = segments[j];
        // 겹칠 경우 touched 증가
        if(x1<cx1 && x2>cx2) touched++;
        else if(x1>cx1 && x2<cx2) touched++;
    }
    // 한번도 안 겹쳤을 경우 cnt 증가
    if(touched===0) cnt++;
}

console.log(cnt);
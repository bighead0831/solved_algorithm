const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}

// x == 데이터센터 온도범위
// Ta > x : C
// Ta <= x <= Tb : G
// Tb < x : H

function workload(a,b,e) {
    if(a>e) return c;
    else if(a<=e && e<=b) return g;
    else if(b<e) return h;
}

let maxWorkload = 0;
for(let e=0; e<=1000; e++) { // 데이터센터 온도 0~1000일때의 작업량 완전탐색
    let sum = 0;
    for(let i=0; i<n; i++) { // n개의 장비 작업량 합치기
        let a = ta[i];
        let b = tb[i];
        sum += workload(a,b,e);
    }
    maxWorkload = Math.max(maxWorkload, sum);
}

console.log(maxWorkload);
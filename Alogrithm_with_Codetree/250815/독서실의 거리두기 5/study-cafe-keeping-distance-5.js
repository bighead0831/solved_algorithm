const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('').map(Number);

function cntDist(i) {
    let minDist = 0;
    let [ldist, rdist] = [0, 0];

    for(let j=i; j>=0; j--) { // 왼쪽으로 카운트
        if(seat[j] === 1) break;
        else ldist++;
    }

    for(let j=i; j<n; j++) { // 오른쪽으로 카운트
        if(seat[j] === 1) break;
        else rdist++;
    }

    // i가 처음 혹은 끝일 경우 고려하여 다음과 같이 초기화
    ldist = (ldist===1) ? n:ldist;
    rdist = (rdist===1) ? n:rdist;

    minDist = Math.min(ldist, rdist); // i일때 가장 가까운 두 사람 간의 거리
    return minDist;
}


let cnt = 0;
for(let i=0; i<n; i++) {
    if(i>=0) {
        if(seat[i-1] === 1 || seat[i+1] === 1 || seat[i] === 1) {
            continue;
        } else {
            cnt = Math.max(cnt, cntDist(i));
        }
    } 
}

console.log(cnt);
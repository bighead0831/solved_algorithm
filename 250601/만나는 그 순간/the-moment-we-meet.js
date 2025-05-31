const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
let arrA = Array(1000).fill(0); // A의 위치 배열
let arrB = Array(1000).fill(0); // B의 위치 배열

function movingA(movesA) { // A의 이동 기록
    let cnt = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<movesA[i][1]; j++) {
            cnt++;
            if(movesA[i][0] === 'L') {
                arrA[cnt] = arrA[cnt-1]-1;
            } else if(movesA[i][0] === 'R') {
                arrA[cnt] = arrA[cnt-1]+1;
            }
        }
    }
}

function movingB(movesB) { // B의 이동 기록
    let cnt = 0;
    for(let i=0; i<m; i++) {
        for(let j=0; j<movesB[i][1]; j++) {
            cnt++;
            if(movesB[i][0] === 'L') {
                arrB[cnt] = arrB[cnt-1]-1;
            } else if(movesB[i][0] === 'R') {
                arrB[cnt] = arrB[cnt-1]+1;
            }
        }
    }
}

function checkMeeting() { // A와 B가 만나는 순간 반환
    let cnt = 0;
    for(let i=0; i<1000; i++) {
        if(arrA[i] === arrB[i]) {
            cnt = i;
            if(cnt != 0) return cnt;
        }
    }
    return -1;
}

movingA(movesA);
movingB(movesB);
console.log(checkMeeting());
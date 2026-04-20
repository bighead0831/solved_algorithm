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
let arrA = []; // A의 위치 배열
let arrB = []; // B의 위치 배열

function movingA(movesA) { // A의 이동 기록
    let cnt = 0;
    arrA[0] = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<movesA[i][1]; j++) {
            cnt++;
            if(movesA[i][0] === 'L') {
                arrA.push(arrA[cnt-1]-1);
            } else if(movesA[i][0] === 'R') {
                arrA.push(arrA[cnt-1]+1);
            }
        }
    }
}

function movingB(movesB) { // B의 이동 기록
    let cnt = 0;
    arrB[0] = 0;
    for(let i=0; i<m; i++) {
        for(let j=0; j<movesB[i][1]; j++) {
            cnt++;
            if(movesB[i][0] === 'L') {
                arrB.push(arrB[cnt-1]-1);
            } else if(movesB[i][0] === 'R') {
                arrB.push(arrB[cnt-1]+1);
            }
        }
    }
}

function checkMeeting() { // A와 B가 만나는 순간 반환
    let cnt = 0;
    let length = arrB.length;
    if(arrA.length<arrB.length) length = arrA.length;

    for(let i=0; i<length; i++) {
        if(arrA[i] != -1000 && arrB[i] != -1000) {
            if(arrA[i] === arrB[i]) {
                cnt = i;
                if(cnt != 0) return cnt;
            }
        }
    }
    return -1;
}

movingA(movesA);
movingB(movesB);
console.log(checkMeeting());
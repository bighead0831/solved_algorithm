const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.

// 시간당 A가 움직인 거리
let movedA_perTime = [];
for (let i=0; i < n; i++) {
    const time = A_moves[i][1];
    const velocity = A_moves[i][0];
    for (let j=1; j<=time; j++) {
        movedA_perTime.push(velocity);
    }
}
// 시간당 A의 위치
let posA = Array(movedA_perTime.length).fill(0);
posA[0] = movedA_perTime[0];
for (let i=1; i < posA.length; i++) {
    posA[i] = posA[i-1]+movedA_perTime[i];
}

// 시간당 B가 움직인 거리
let movedB_perTime = [];
for (let i=0; i < m; i++) {
    const time = B_moves[i][1];
    const velocity = B_moves[i][0];
    for (let j=1; j<=time; j++) {
        movedB_perTime.push(velocity);
    }
}
// 시간당 B의 위치
let posB = Array(movedB_perTime.length).fill(0);
posB[0] = movedB_perTime[0];
for (let i=1; i < posB.length; i++) {
    posB[i] = posB[i-1]+movedB_perTime[i];
}

let cnt = 1; // 바뀐 조합 초기화 (최초 선두 조합 포함하여 1로 초기화)
let curHead = 'A';
let same = 0;
if(posA[0] < posB[0]) curHead = 'B';

for(let i=1; i<posA.length; i++) {
    let tmpHead = 'A';
    if(posA[i] < posB[i]) {
        tmpHead = 'B';
    }
    else if(posA[i] === posB[i]) {
        curHead = 'A&B';
    }
    if(tmpHead != curHead) {
        curHead = tmpHead;
        cnt++;
    }
}

console.log(cnt);
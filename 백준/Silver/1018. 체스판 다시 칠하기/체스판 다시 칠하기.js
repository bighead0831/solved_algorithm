const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number); // n, m
const inputChess = input.slice(1).map(row => row.split('')); // 입력된 체스판
let standardChess_W = Array(n).fill('').map(()=>Array(m).fill('')); // W로 시작하는 표준 체스판
let standardChess_B = Array(n).fill('').map(()=>Array(m).fill('')); // B로 시작하는 표준 체스판
let checkChange_W = Array(n).fill(0).map(()=>Array(m).fill(0)); // W 표준 체스판과 비교
let checkChange_B = Array(n).fill(0).map(()=>Array(m).fill(0)); // B 표준 체스판과 비교

for(let i=0; i<n; i++) { // W로 시작하는 표준 체스판 생성
    for(let j=0; j<m; j++) {
        if(i%2 === 0)
            if(j%2 === 0) standardChess_W[i][j] = 'W'
            else standardChess_W[i][j] = 'B'
        else
            if(j%2 === 0) standardChess_W[i][j] = 'B'
            else standardChess_W[i][j] = 'W'
    }
}
for(let i=0; i<n; i++) { // B로 시작하는 표준 체스판 생성
    for(let j=0; j<m; j++) {
        if(i%2 === 0)
            if(j%2 === 0) standardChess_B[i][j] = 'B'
            else standardChess_B[i][j] = 'W'
        else
            if(j%2 === 0) standardChess_B[i][j] = 'W'
            else standardChess_B[i][j] = 'B'
    }
}

for(let i=0; i<n; i++) { // 입력 체스판과 표준체스판(W, B) 비교
    for(let j=0; j<m; j++) {
        if(inputChess[i][j] != standardChess_W[i][j]) checkChange_W[i][j] = 1;
        if(inputChess[i][j] != standardChess_B[i][j]) checkChange_B[i][j] = 1;
    }
}

let minCnt = 64; // 8x8 체스판 모두 바꿔야 할 경우(최댓값)로 초기화
for(let i=0; i<=n-8; i++) {
    for(let j=0; j<=m-8; j++) { // 입력 체스판에서 8x8체스판만 똑 떼어다가 확인할 경우 최소한 색칠하는 경우의 수
        let cnt_W = 0;
        let cnt_B = 0;
        for(k=0; k<8; k++) {
            for(l=0; l<8; l++) {
                if(checkChange_W[i+k][j+l] === 1) cnt_W++;
                if(checkChange_B[i+k][j+l] === 1) cnt_B++;
            }
        }
        minCnt = Math.min(minCnt, cnt_W, cnt_B);
    }
}

console.log(minCnt);
const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

// 색종이 갯수
const n = Number(input[0]);

// 각 색종이 위치 초기화
let paper = Array(n).fill(0).map( () => Array(2).fill(0));

// 각 색종이 위치 입력 (i 색종이에 위치 입력)
for(let i=0; i<n; i++) {
    paper[i][0] = Number(input[i+1].split(' ')[0]);
    paper[i][1] = Number(input[i+1].split(' ')[1]);
}

// 도화지 초기화 (요소가 0이면 백, 1이면 흑 / 현재는 빈 도화지므로 요소 모두 0)
let board = Array(100).fill(0).map( () => Array(100).fill(0));

// n개 색종이 붙이기
for(let i=0; i<n; i++) {
    // 색종이로 채워지는 세로
    for(let j=0; j<10; j++) {
        // 색종이로 채워지는 가로
        for(let k=0; k<10; k++) {
            // 검게 칠하기(0 => 1)
            board[100-Number(paper[i][1])-j][Number(paper[i][0])+k] = 1;
        }
    }
}

let cnt = 0

// 도화지에 검게 칠해진 부분(1)만 카운트
for(let i=0; i<100; i++) {
    for(let j=0; j<100; j++) {
        if(board[i][j] == 1) {
            cnt++;
        }
    }
}

// 검은 영역 넓이 출력
console.log(cnt);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 좌표계 생성
let dimension = Array(200).fill(0).map(() => Array(200).fill(0));

// 사각형 그리기
function drawRectangle(x1, y1, x2, y2) {
    for(let i=x1; i<x2; i++) {
        for(let j=y1; j<y2; j++) {
            if(dimension[100+i][100+j] == 0) dimension[100+i][100+j] += 1;
        }
    }
}

// 그려진 사각형 넓이 구하기
function getDimensions() {
    let cnt = 0;
    for(let i=0; i<200; i++) {
        for(let j=0; j<200; j++) {
            if(dimension[i][j] > 0) cnt += 1;
        }
    }
    return cnt;
}

// 실행
for(let i=0; i<n; i++) drawRectangle(rects[i][0], rects[i][1], rects[i][2], rects[i][3]);
console.log(getDimensions());
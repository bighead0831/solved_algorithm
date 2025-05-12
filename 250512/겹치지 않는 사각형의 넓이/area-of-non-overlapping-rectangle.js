const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// 2000x2000 좌표계 생성
let arr = Array(2000).fill(0).map( () => Array(2000).fill(0));

// 사각형 A, B를 그리는 함수
function drawRectangle (x1, y1, x2, y2) {
    for(let i=x1; i<x2; i++) {
        for(let j=y1; j<y2; j++) {
            arr[1000+i][1000+j] = 1; // 색칠하기 (해당 구역에 1 입력)
        }
    }
}

// 사각형 M을 덮는 함수
function drawRectangleM (x1, y1, x2, y2) {
    for(let i=x1; i<x2; i++) {
        for(let j=y1; j<y2; j++) {
            arr[1000+i][1000+j] = 0; // 덮기 (해당 구역에 0 입력)
        }
    }
}

function checkArea (arr) {
    let cnt=0;
    for(let i=0; i<2000; i++) {
        for(let j=0; j<2000; j++) {
            if(arr[i][j] == 1) cnt++;
        }
    }
    return cnt;
}

drawRectangle(rectA[0], rectA[1], rectA[2], rectA[3]); // 사각형 A 그리기
drawRectangle(rectB[0], rectB[1], rectB[2], rectB[3]); // 사각형 B 그리기
drawRectangleM(rectM[0], rectM[1], rectM[2], rectM[3]); // 사각형 M으로 덮기

console.log(checkArea(arr)); // 사각형 M으로 덮이지 못한 사각형 A, B의 넓이 출력
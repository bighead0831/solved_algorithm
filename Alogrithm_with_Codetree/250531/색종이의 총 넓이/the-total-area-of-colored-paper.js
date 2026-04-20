const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let arr = Array(200).fill(0).map( () => Array(200).fill(0)); // 좌표계 생성

function stickRect(r) { // 색종이 붙이기 (붙인부분은 1로 치환)
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            arr[i+(r[0]+100)][j+(r[1]+100)] = 1;
        }
    }
}

function getArea() { // 좌표상 색종이 붙은 부분 값 반환
    let area = 0;
    for(let i=0; i<200; i++) {
        for(let j=0; j<200; j++) {
            if(arr[i][j] === 1) area++;
        }
    }

    return area;
}

for(let i=0; i<n; i++) stickRect(rects[i]);
console.log(getArea());
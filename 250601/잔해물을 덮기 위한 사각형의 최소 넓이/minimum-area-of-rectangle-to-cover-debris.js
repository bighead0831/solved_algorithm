const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

let arr = Array(2000).fill(0).map( () => Array(2000).fill(0)); // 좌표계 생성 

function push1Rect(rect) { // 좌표계에 1로 채우기
    let x1 = rect[0]+1000, y1 = rect[1]+1000; // (x1, y1)
    let x2 = rect[2]+1000, y2 = rect[3]+1000; // (x2, y2)
    for(let i=y1; i<y2; i++) {
        for(let j=x1; j<x2; j++) {
            arr[i][j] = 1;
        }
    }
}

function push2Rect(rect) { // 좌표계에 0으로 채우기
    let x1 = rect[0]+1000, y1 = rect[1]+1000; // (x1, y1)
    let x2 = rect[2]+1000, y2 = rect[3]+1000; // (x2, y2)
    for(let i=y1; i<y2; i++) {
        for(let j=x1; j<x2; j++) {
            arr[i][j] = 0;
        }
    }
}

function getMinRect() {
    let x1 = 2000, y1 = 2000;
    let x2 = 0, y2 = 0;

    for(let i=0; i<2000; i++) {
        for(let j=0; j<2000; j++) {
            if(arr[i][j] === 1 && (x1>=j && y1>=i)) {
                x1 = j;
                y1 = i;
            }
            if(arr[i][j] === 1) {
                x2 = j+1;
                y2 = i+1;
            }
        }
    }
    if(x1==2000&&y1==2000&&x2==0&&y2==0) return 0;
    return (x2-x1)*(y2-y1); // 넓이 반환
}

push1Rect(rect1);
push2Rect(rect2);
console.log(getMinRect());
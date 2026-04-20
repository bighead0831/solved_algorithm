const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

let arr = Array(200).fill(0).map( () => Array(200).fill(0));

function stickRedRect(rect) {
    let x1 = rect[0]+100, y1 = rect[1]+100, x2 = rect[2]+100, y2 = rect[3]+100;

    for(let i=y1; i<y2; i++) {
        for(let j=x1; j<x2; j++) {
            arr[i][j] = 1;
        }
    }
}

function stickBlueRect(rect) {
    let x1 = rect[0]+100, y1 = rect[1]+100, x2 = rect[2]+100, y2 = rect[3]+100;

    for(let i=y1; i<y2; i++) {
        for(let j=x1; j<x2; j++) {
            arr[i][j] = 2;
        }
    }
}

function getBlueArea() {
    let area = 0;
    for(let i=0; i<200; i++) {
        for(let j=0; j<200; j++) {
            if(arr[i][j] === 2) area++;
        }
    }
    return area;
}


for(let i=0; i<n; i++) {
    if(i%2 == 0) stickRedRect(rectangles[i]);
    else stickBlueRect(rectangles[i]);
}

console.log(getBlueArea());
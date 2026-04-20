const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
// let [dx, dy] = [[1, 0, -1, 0], [0, -1, 0, 1]];

function countingOne(x, y) {
    let isOne = 0;
    if(y-1>=0 && x>=0) if(grid[y-1][x] === 1) isOne++;
    if(y>=0 && x-1>=0) if(grid[y][x-1] === 1) isOne++;
    if(y+1<n && x>=0) if(grid[y+1][x] === 1) isOne++;
    if(y>=0 && x+1<n) if(grid[y][x+1] === 1) isOne++;

    return isOne;
}

let cnt = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(countingOne(j, i)>=3) cnt++;
    }
}
console.log(cnt);
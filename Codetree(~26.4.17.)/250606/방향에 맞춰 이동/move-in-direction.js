const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
let direction = Array(n);
let go = Array(n).fill(0);
for(let i=0; i<n; i++) {
    [direction[i], go[i]] = moves[i].split(' ');
}
let dx = [1, 0, -1, 0], dy = [0, -1, 0, 1];

let [px, py] = [0, 0]; // 현위치 (0, 0)으로 초기화

for(let i=0; i<n; i++) {
    if(direction[i] === 'E') {
        px += dx[0]*go[i], py += dy[0];
    } else if(direction[i] === 'S') {
        px += dx[1], py += dy[1]*go[i];
    } else if(direction[i] === 'W') {
        px += dx[2]*go[i], py += dy[2];
    } else if(direction[i] === 'N') {
        px += dx[3], py += dy[3]*go[i];
    }
}

console.log(px, py);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1].split('');
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.
const dc = [0, 1, 0, -1]; // U, R, D, L
const dr = [-1, 0, 1, 0]; // U, R, D, L
const mapper = {'R': 1, 'L': -1, 'F': 0};

let dir = 0; // 최초 direction U
let cr = Math.floor(n/2); // 최초 row 위치
let cc = Math.floor(n/2); // 최초 column 위치

let result = board[cr][cc];

function inRange(r,c) {return 0<=r && r<n && 0<=c && c<n;}

let nr=0, nc=0;
for(let i=0; i<commands.length; i++) {
    if(mapper[commands[i]] === 0) {
        nr = cr + dr[dir];
        nc = cc + dc[dir];
        if(inRange(nr,nc)) {
            cr = nr, cc = nc;
            result += board[cr][cc];
        }
    } else {
        dir = (dir+mapper[commands[i]]+4)%4;
    }
}

console.log(result);
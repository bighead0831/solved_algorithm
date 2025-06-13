const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.
let dx = [1, 0, -1, 0]; // R, D, L, U
let dy = [0, 1, 0, -1]; // R, D, L, U

let mapper = {'R': 0, 'D': 1, 'L': 2, 'U': 3};


let mirror = Array(n).fill('').map( ()=>Array(n).fill('') );
for(let i=0; i<n; i++) { mirror[i] = arr[i].split(''); }

let dir = '';
let startSide = parseInt((startNum-1)/4);
let startMirror = [0,0];
if(startSide === 0) { dir = 'D'; startMirror = [0,startNum-1]; } // 윗면에서 아래로 빛 쏨 D
else if(startSide === 1) { dir = 'L'; startMirror = [(startNum-1)%n, n-1]; } // 우측면에서 좌측으로 빛 쏨 L
else if(startSide === 2) { dir = 'U'; startMirror = [n-1, n-1-(starNum-1)%n]; } // 아랫면에서 위로 빛 쏨 U
else if(startSide === 3) { dir = 'R'; startMirror = [n-1-(startNum-1)%n, 0]} // 좌측면에서 우측으로 빛 쏨 R

let cnt = 0;
let cury = startMirror[0];
let curx = startMirror[1]; 

function inRange(x,y) { return x>=0 && x<n && y>=0 && y<n; }

while(inRange(curx, cury)) {
    console.log(cury, curx);
    cnt++;
    if(mirror[cury][curx] === '\\') {
        if(dir === 'R') { dir = 'D'; } 
        else if(dir === 'L') { dir = 'U'; } 
        else if(dir === 'D') { dir = 'R'; } 
        else if(dir === 'U') { dir = 'L'; }
        curx += dx[mapper[dir]];
        cury += dy[mapper[dir]];
    } else if(mirror[cury][curx] === '/') {
        if(dir === 'U') { dir = 'U'; }
        else if(dir === 'L') { dir = 'D'; }
        else if(dir === 'D') { dir = 'L'; }
        else if(dir === 'U') { dir = 'R'; }
        curx += dx[mapper[dir]];
        cury += dy[mapper[dir]];
    }
}


console.log(cnt);
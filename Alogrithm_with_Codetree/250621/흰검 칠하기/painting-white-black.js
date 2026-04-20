const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));
// Please Write your code here.
const MAX = 1000*100*2+1; // 1000 commands, 100 moves, positive and negative direction
let arr = Array(MAX).fill('');
let isWhite = Array(MAX).fill(0);
let isBlack = Array(MAX).fill(0);
const SP = 100000; // start point
let cp = SP; // current point

const dx = [-1,1];
const mapper = {'L': 0, 'R': 1};

for(let i=0; i<n; i++) {
    const moves = Number(commands[i][0]);
    const dir = commands[i][1];

    for(let j=0; j<moves; j++) {
        if(dir==='L') {
            arr[cp] = 'W';
            isWhite[cp] += 1;
        } else if(dir==='R') {
            arr[cp] = 'B';
            isBlack[cp] += 1;
        }
        if(isWhite[cp]>=2 && isBlack[cp]>=2) arr[cp] = 'G';
        if(j!=moves-1) cp += dx[mapper[dir]];
    }
}

let w=0, b=0, g=0;
for(let i=0; i<MAX; i++) {
    if(arr[i] === 'W') w++;
    else if(arr[i] === 'B') b++;
    else if(arr[i] === 'G') g++;
}

console.log(w, b, g);
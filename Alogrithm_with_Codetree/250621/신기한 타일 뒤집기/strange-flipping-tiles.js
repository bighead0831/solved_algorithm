const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const MAX =  1000*100*2+1; // The Size of Array
const SP = 1000*100; // Start Point
let arr = Array(MAX).fill('G');
let cp = SP; // Intialize Current Point with Start Point
const dx = [-1, 1];
const mapper = {'L': 0, 'R': 1};

for(let i=0; i<n; i++) {
    const [moves, dir] = [Number(commands[i][0]), mapper[commands[i][1]]];
    for(let i=0; i<moves; i++) {
        if(dir === 0) arr[cp] = 'W';
        else if(dir === 1) arr[cp] = 'B';

        if(i<moves-1) cp += dx[dir];
    }
}

let w = 0, b = 0;
for(let i=0; i<MAX; i++) {
    if(arr[i] === 'W') w++;
    else if(arr[i] === 'B') b++;
}

console.log(w, b);
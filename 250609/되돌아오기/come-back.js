const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.

let [dx, dy] = [[1, 0, -1, 0], [0, -1, 0, 1]]; // E, S, W, N

let mapper = {'E': 0, 'S': 1, 'W': 2, 'N': 3};

let x=0, y=0;

let cnt = 0;
let result = -1;

for(let i=0; i<n; i++) {
    let [dir, time] = moves[i].split(' ');
    time = Number(time);
    dir = mapper[dir];
    for(let j=0; j<time; j++) {
        x += dx[dir];
        y += dy[dir];
        cnt++;
        if(x===0 && y===0) {
            result = cnt;
            break;
        }
    }
}

if(result != 0) {
    console.log(result);
} else {
    console.log(result);
}



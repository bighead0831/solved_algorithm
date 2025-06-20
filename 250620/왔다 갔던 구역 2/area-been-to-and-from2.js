const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

let moves = Array(n).fill(0);
let dir = Array(n).fill(0);
for(let i=0; i<n; i++) {
    [moves[i], dir[i]] = commands[i].split(' ');
}

// Please Write your code here.
let arr = Array(1000).fill(0);
let cp = 500; // current point

for(let i=0; i<n; i++) {
    for(let j=0; j<Number(moves[i]); j++) {
        if(dir[i] === 'R') {
            cp += 1;
        } else {
            cp -= 1;
        }
        arr[cp] += 1;
    }
}

let cnt = 0;
for(let i=0; i<1000; i++) {
    if(arr[i] >= 2) cnt++;
}

console.log(cnt);
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
let arr = Array(2001).fill(0);
let cp = 1000; // current point

let min = 2000;
let max = 0;

for(let i=0; i<n; i++) {
    for(let j=0; j<Number(moves[i]); j++) {
        if(dir[i] === 'R') { // 오른쪽 갈때는 칠하고 옮기기. 예를들어 0->2면 0, 1이 칠해짐
            arr[cp] += 1;
            cp += 1;
        } else { // 왼쪽 갈때는 옮기고 칠하기. 예를들어 2->0면 1, 0이 칠해짐 (요것이 Key Point!!)
            cp -= 1;
            arr[cp] += 1;
        }
    }
}

let cnt = 0;
for(let i=0; i<2001; i++) {
    if(arr[i] >= 2) cnt++;
}

console.log(+ cnt);
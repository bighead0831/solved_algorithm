const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
let [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];

let Command = commands.split(''); // n개의 명령
let N = Command.length; // 명령의 갯수, n
let dirNum = 0; // 회전

let [px, py] = [0, 0];

for(let i=0; i<N; i++) {
    if(Command[i] === 'L') {
        dirNum = (dirNum-1 + 4)%4;
    } else if(Command[i] === 'R') {
        dirNum = (dirNum+1)%4;
    } else {
        [px, py] = [px+dx[dirNum], py+dy[dirNum]];
    }
}

console.log(px, py);
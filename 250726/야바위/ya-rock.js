const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let appPos = -1; // Appropriate Position
let arr = new Array(3).fill(0);
let maxCnt=0;
for(let i=0; i<3; i++) {
    arr[i] = 1;
    let cnt=0;
    for(let j=0; j<n; j++) {
        let tmp = arr[commands[j][0]];
        arr[commands[j][0]] = arr[commands[j][1]];
        arr[commands[j][1]] = tmp;
       if(arr[commands[j][2]]===1) cnt++;
    }
    maxCnt = Math.max(maxCnt, cnt);
    if(maxCnt === cnt) appPos = i;

    arr[i] = 0;
}

console.log(appPos);
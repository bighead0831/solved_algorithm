const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.
const order = commands.split('');
let [dx, dy] = [[1, 0, -1, 0], [0, -1, 0, 1]]; // R, D, L, U
let mapper = {'L': -1, 'R': 1, 'F': 0};

let x=0, y=0;
let dir = 3;

let cnt = 0;
let result = -1;
let min = 0;
for(let i=0; i<order.length; i++) {
    let cdir = mapper[order[i]];
    let ndir = 0;

    if(dir+cdir>3) {
        ndir = 0;
    } else if(dir+cdir<0) {
        ndir = 3;
    } else {
        ndir = dir+cdir;
    }

    if(cdir===0) {
        x += dx[ndir];
        y += dy[ndir];
        cnt++;
        if(x===0 && y===0 && min===0) {
            result = cnt;
            min++;
        }
    } else {
        dir = ndir;
        cnt++;
    }
}

console.log(result);
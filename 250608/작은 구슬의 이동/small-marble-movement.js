const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
let dx = [1, 0, 0, -1]; // x by (R, U, D, L)
let dy = [0, -1, 1, 0]; // y by (R, U, D, L)
const mapper = {'R': 0, 'U': 1, 'D': 2, 'L': 3};
let dirNum = mapper[d];

// 1~n범위 내의 x, y 검사
function inRange(x, y) {return x>=0 && x<n && y>=0 && y<n;}

r-=1, c-=1;
for(let i=0; i<t; i++) {
    c=c+dx[dirNum];
    r=r+dy[dirNum];
    if(!inRange(c,r)) {
        c=c-dx[dirNum];
        r=r-dy[dirNum];
        dirNum = dirNum-3;
        if(dirNum<0) dirNum-=dirNum*2;
    }
}
r+=1, c+=1;

console.log(r, c);
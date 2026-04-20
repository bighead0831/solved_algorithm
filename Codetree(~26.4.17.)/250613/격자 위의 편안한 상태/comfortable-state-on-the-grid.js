const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.
let arr = Array(n).fill(0).map( ()=>Array(n).fill(0) );
let dx = [1,0,-1,0];
let dy = [0,1,0,-1];

function inRange(x,y) {
    return x>=0 && x<n && y>=0 && y<n;
}

function checkPeace(r,c) {
    let cnt = 0;
    for(let i=0; i<4; i++) {
        let x = r + dx[i];
        let y = c + dy[i];
        if(inRange(x,y)){
            if(arr[x][y] === 1) cnt++;
        }
    }
    if(cnt === 3) {return true;}
    else {return false;}
}

for(let i=0; i<m; i++) {
    let [r, c] = [moves[i][0]-1, moves[i][1]-1];
    arr[r][c] = 1;
    if(checkPeace(r,c)) {
        console.log(1);
    } else {
        console.log(0);
    }
}
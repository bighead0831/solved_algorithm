const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

let arr = Array(n).fill(0).map( () => Array(m).fill(0) );

let dx = [1, 0, -1, 0]; // R, D, L, U
let dy = [0, 1, 0, -1]; // R, D, L, U

function inRange(x, y) {return x>=0 && x<m && y>=0 && y<n;}

let dirNum = 0;
let cnt = 1;
let x = 0, y = 0;
arr[y][x] = 1;
while (cnt!=n*m) { // n*m배열의 채워지는 최대 숫자는 'n*m'
    cnt++;
    let nx = x+dx[dirNum];
    let ny = y+dy[dirNum];
    if(!inRange(nx, ny) || arr[ny][nx] != 0) { // 배열의 범위를 초과하지 않는지, 다음 채우고자 하는 배열이 이미 채워져있지 않은지 검사
        dirNum+=1;
        if(dirNum>3) dirNum=0;
    }
    x = x+dx[dirNum];
    y = y+dy[dirNum];
    arr[y][x] = cnt;
}

// 출력
for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        process.stdout.write(arr[i][j]+' ');
    }
    process.stdout.write('\n');
}
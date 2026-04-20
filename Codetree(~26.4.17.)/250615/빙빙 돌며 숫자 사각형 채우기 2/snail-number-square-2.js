const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
const dx = [0, 1, 0, -1]; // D, R, U, L
const dy = [1, 0, -1, 0]; // D, R, U, L
const mapper = {'D':0, 'R':1, 'U':2, 'L':3};

let arr = Array(n).fill(0).map( ()=>Array(m).fill(0) );

function inRange(r, c) {
    return r>=0 && r<n && c>=0 && c<m;
}

let rp=0; let cp=0;
let dir=0;
let cnt = 1;
arr[rp][cp] = cnt;

let trp = rp; let tcp = cp;

while(cnt < n*m) {
    trp = rp; tcp = cp;
    trp += dy[dir]; tcp += dx[dir];
    if(inRange(trp, tcp)) {
        if (arr[trp][tcp] === 0) {
            rp = trp;
            cp = tcp;
            cnt++;
            arr[rp][cp] = cnt;
        } else {
            dir = (dir+1)%4;
        }
    } else {
        dir = (dir+1)%4;
    }
}

for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        process.stdout.write(arr[i][j]+' ');
    }
    process.stdout.write('\n');
}
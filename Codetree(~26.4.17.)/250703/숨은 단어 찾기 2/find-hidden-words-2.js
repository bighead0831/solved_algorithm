const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1).map(row=>row.split(''));

const dx = [1, 1, 0, -1, -1, -1, 0, 1]; // RR RD DD LD LL LU UU RU
const dy = [0, 1, 1, 1, 0, -1, -1, -1]; // RR RD DD LD LL LU UU RU

function inRange(r,c) {return 0<=r && r<n && 0<=c && c<m;}

let cnt = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        if(arr[i][j] === 'L') {
            for(let k=0; k<dx.length; k++) {
                let tmpi = i+dy[k]; let tmpj = j+dx[k];
                let tmpii = tmpi+dy[k]; let tmpjj = tmpj+dx[k];
                if(inRange(tmpi, tmpj) && inRange(tmpii, tmpjj)) {
                    if(arr[tmpi][tmpj] === 'E' && arr[tmpii][tmpjj] === 'E') {
                        cnt++;
                    }
                }
            }
        }
    }
}

console.log(cnt);
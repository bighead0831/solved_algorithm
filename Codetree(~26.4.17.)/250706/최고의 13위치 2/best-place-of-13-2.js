const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

function inRange(r,c) {return 0<=r && r<n && 0<=c && c<n;}

let maxCoin = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<n-2; j++) {
        let sg1_coin = 0;
        for(let c=j; c<=j+2; c++) {
            if(grid[i][c] === 1) sg1_coin++;
        }
        for(let r=i; r<n; r++) {
            for(let c=0; c<n; c++) {
                let sg2_coin = 0;
                if(r===i && c<=j+2) continue;
                if(inRange(r,c+2)) {
                    for(let k=c; k<=c+2; k++)
                        if(grid[r][k] === 1) sg2_coin++;
                    let sum = sg1_coin+sg2_coin;
                    maxCoin = Math.max(maxCoin, sum);
                }
            }
        }
    }
}

console.log(maxCoin);
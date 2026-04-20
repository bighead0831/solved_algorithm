const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let closedDist = 1000**2+1000**2;
for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        let tmpDist = (points[i][0]-points[j][0])**2 + (points[i][1]-points[j][1])**2
        closedDist = Math.min(closedDist, tmpDist);
    }
}

console.log(closedDist);
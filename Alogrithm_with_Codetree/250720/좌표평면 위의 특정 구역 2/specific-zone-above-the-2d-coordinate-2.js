const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

let minArea = Number.MAX_SAFE_INTEGER;
for(let i=0; i<n; i++) {
    let minX = 40000; let maxX = 0;
    let minY = 40000; let maxY = 0;
    for(let j=0; j<n; j++) {
        if(i===j) continue;
        else {
            const [x, y] = points[j];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
    }
    minArea = Math.min(minArea, (maxX-minX)*(maxY-minY));
}

console.log(minArea);
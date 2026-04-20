const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let result = 0;

for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        for(let k=j+1; k<n; k++) {
            let [x1, y1] = [points[i][0], points[i][1]];
            let [x2, y2] = [points[j][0], points[j][1]];
            let [x3, y3] = [points[k][0], points[k][1]];
            if(x1===x2 || x2===x3 || x3===x1) {
                if(y1===y2 || y2===y3 || y3===y1) {
                    let minX = Math.min(x1, x2, x3);
                    let maxX = Math.max(x1, x2, x3);
                    let minY = Math.min(y1, y2, y3);
                    let maxY = Math.max(y1, y2, y3);
                    let area = (maxX-minX)*(maxY-minY);
                    result = Math.max(result, area);
                }
            }
        }
    }
}

console.log(result);
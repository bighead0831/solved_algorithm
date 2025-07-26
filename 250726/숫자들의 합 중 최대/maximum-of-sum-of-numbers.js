const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x, y] = input[0].split(' ').map(Number);

let maxSum = 0;
for(let i=x; i<=y; i++) {
    let num = String(i).split('').map(Number);
    let sum = 0;
    for(let j=0; j<num.length; j++) sum += num[j];
    maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
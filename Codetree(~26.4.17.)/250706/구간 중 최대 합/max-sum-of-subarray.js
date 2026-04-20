const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let result = 0;
for(let i=0; i<=n-k; i++) {
    let sum = 0;
    for(let j=i; j<i+k; j++) sum += arr[j];
    result = Math.max(result, sum);
}

console.log(result);
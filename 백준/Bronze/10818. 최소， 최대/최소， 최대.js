const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const elements = input[1].split(' ').map(Number);

let max = -1000000;
let min = 1000000;

for(let i=0; i<n; i++) {
    max = Math.max(max, elements[i]);
    min = Math.min(min, elements[i]);
}

console.log(min, max);
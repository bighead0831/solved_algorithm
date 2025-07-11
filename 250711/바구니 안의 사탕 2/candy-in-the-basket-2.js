const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}

const MAXPOS = 100;
let arr = new Array(MAXPOS).fill(0);

for(let i=0; i<n; i++) arr[baskets[i][1]] += baskets[i][0];

let result = 0;
for(let i=0; i<MAXPOS-2*k; i++) {
    let sum = 0
    for(let j=0; j<=2*k; j++) {
        sum += arr[i+j];
    }
    result = Math.max(result, sum);
}

console.log(result);
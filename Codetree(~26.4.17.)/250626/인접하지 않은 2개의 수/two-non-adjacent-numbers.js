const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let maxSum = 0;
for(let i=0; i<n-2; i++) {
    let sum = arr[i];
    for(let j=i+2; j<n; j++) {
        sum += arr[j];
        maxSum = Math.max(maxSum, sum);
        sum -= arr[j];
    }
}

console.log(maxSum);
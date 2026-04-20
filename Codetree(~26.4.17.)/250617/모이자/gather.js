const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let distSum = Array(arr.length).fill(0);
let minSum = 1000000000000000000;

for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
        distSum[i] += Math.abs(i-j)*arr[j];
    }
    if(minSum > distSum[i]) minSum = distSum[i];
}

console.log(minSum);
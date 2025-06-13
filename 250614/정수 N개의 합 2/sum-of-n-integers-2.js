const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let prefixSum = new Array(n).fill(0);

prefixSum[0] = arr[0];
for(let i=1; i<n; i++) {
    prefixSum[i] = prefixSum[i-1]+arr[i];
}

let tmp = 0, big = prefixSum[k-1];
for(let i=0; i<n-k; i++) {
    tmp = prefixSum[i+k]-prefixSum[i];
    if(big < tmp) big = tmp;
}

console.log(big);
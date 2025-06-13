const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let result = new Array(n-k).fill(0);

let big = 0;
for(let i=0; i<n-k; i++) {
    for(let j=0; j<k; j++) result[i] += arr[i+j];
    if(big<result[i]) {
        big = result[i];
    }
}

console.log(big);
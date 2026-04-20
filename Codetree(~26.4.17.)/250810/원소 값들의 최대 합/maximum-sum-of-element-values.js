const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

let max_sum = 0;
for(let i=1; i<=n; i++) {
    const tmpArr = arr; // Temporary new Array for result of moving M times
    let sum = 0; // The sum of elements
    let movp = i; // a Moving Point (1st time)
    for(let j=0; j<m; j++) { // Move M times
        sum += arr[movp];
        movp = arr[movp];
    }
    max_sum = Math.max(max_sum, sum);
}

console.log(max_sum);
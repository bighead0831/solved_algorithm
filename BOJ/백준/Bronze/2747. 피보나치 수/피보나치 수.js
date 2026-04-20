const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim().split('\n'));

function nth_pivonachi(n) {
    const arr = Array(n).fill(0).map(Number);
    arr[0] = 0;
    arr[1] = 1;
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr[n];
}

console.log(nth_pivonachi(n));
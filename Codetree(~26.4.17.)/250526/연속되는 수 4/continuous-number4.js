const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

function countIncreasing(arr) {
    let result = 1;
    let cnt = 1;

    for(let i=1; i<n; i++) {
        if(arr[i-1] < arr[i]) {
            cnt++;
            if(result < cnt) result = cnt;
        } else {
            cnt = 1;
        }
    }
    return result;
}

console.log(countIncreasing(arr));
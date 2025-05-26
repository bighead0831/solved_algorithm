const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);


function checkMaxGroup (arr) {
    let cnt = 1;
    let max = 1;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] === arr[i-1]) {
            cnt++;
            if(max < cnt) max = cnt;
        }
        else {
            cnt = 1;
        }
    }

    return max;
}

console.log(checkMaxGroup(arr));
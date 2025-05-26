const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);


function checkGroup (arr) {
    let cnt = 1;
    for(let i=1; i<arr.length; i++) {
        if(arr[i] != arr[i-1]) cnt++;
    }

    return cnt;
}

console.log(checkGroup(arr));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

for(let i=0; i<n-1; i++) {
    for(let j=0; j<n-1; j++) {
        if(arr[j+1]<arr[j]) {
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
}

console.log(arr.join(' '));
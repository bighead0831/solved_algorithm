const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let cnt = 0;
for(let i=0; i<n; i++) {
    let avg = 0; let sum = 0;
    for(let j=i; j<n; j++) {
        sum += arr[j]
        avg = sum/(j-i+1);
        for(let k = i; k<=j; k++) 
            if(avg === arr[k]) {cnt++; break;}
    }
}

console.log(cnt);
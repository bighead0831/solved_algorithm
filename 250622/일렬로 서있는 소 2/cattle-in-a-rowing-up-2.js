const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let n1=0, n2=0, n3=0;
let cnt=0;
for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        for(let k=j+1; k<n; k++) {
            n1 = arr[i], n2 = arr[j], n3 = arr[k];
            if(n1<=n2 && n2<=n3) cnt++
        }
    }
}

console.log(cnt);
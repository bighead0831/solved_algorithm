const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split('').map(Number);

// Please Write your code here.
let getChange = false;
let i=0;
while(getChange = true) {
    if(a.length === 1) {
        a[i] = Math.abs(a[i]-1);
        break;
    }
    if(a[i] === 0) {
        getChange = true;
        a[i] = 1;
        break;
    } else {
        i++;
        if(i===a.length) break;
    }
}

let sum = 0;
for(let j=0; j<a.length; j++) {
    sum += a[j]*(2**((a.length-1)-j));
}

console.log(sum);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let cnt=0;
for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
        for(let k=1; k<=n; k++) {
            if(a-2<=i && i<=a+2) {cnt++;}
            else if(b-2<=j && j<=b+2) {cnt++;}
            else if(c-2<=k && k<=c+2) {cnt++;}
        }
    }
}

console.log(cnt);
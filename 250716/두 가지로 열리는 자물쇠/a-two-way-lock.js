const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.
let cnt = 0;
for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
        for(let k=1; k<=n; k++) {
            if((Math.abs(i-a)<=2 || Math.abs(i-n-a)<=2) && (Math.abs(j-b)<=2 || Math.abs(j-n-b)<=2) && (Math.abs(k-c)<=2 || Math.abs(k-n-c)<=2)) {
                cnt++;
            } else if((Math.abs(i-a2)<=2 || Math.abs(i-n-a2)<=2) && (Math.abs(j-b2)<=2 || Math.abs(j-n-b2)<=2) && (Math.abs(k-c2)<=2 || Math.abs(k-n-c2)<=2)) {
                cnt++;
            }
        }
    }
}

console.log(cnt);
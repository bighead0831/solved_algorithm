const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0].split('');
// Please Write your code here.

let cnt = 0;
for(let i=0; i<A.length-3; i++) {
    if(A[i] === '(' && A[i+1] === '(') {
        for(let j=i+1; j<A.length-1; j++) {
            if(A[j] === ')' && A[j+1] === ')') cnt++;
        }
    }
}

console.log(cnt);
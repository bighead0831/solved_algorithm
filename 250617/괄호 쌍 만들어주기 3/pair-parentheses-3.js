const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

// Please Write your code here.
const charA = A.split('');

let cnt = 0;
for(let i=0; i<charA.length; i++) {
    if(charA[i] === '(') {
        for(let j=0; j<charA.length-i; j++) {
            if(charA[i+j] === ')') cnt++;
        }
    }
}

console.log(cnt);
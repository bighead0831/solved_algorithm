const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let num2 = 0;
let num5 = 0;

function div2(n) {
    if(n%2 === 0) {
        num2++; 
        div2(n/2);
    }
}

function div5(n) {
    if(n%5 === 0) {
        num5++; 
        div5(n/5);
    }
}

if(n>0) {
    for(let i=1; i<=n; i++) {
        div2(i);
        div5(i);
    }
}

console.log(Math.min(num2, num5));
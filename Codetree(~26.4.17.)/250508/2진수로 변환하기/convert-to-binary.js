const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let digit = [];

let N = n;
while(true) {
    if (N<2) {
        digit.push(N);
        break;
    }

    digit.push(N%2);
    N = Math.floor(N/2);
}

let binaryNumber = '';
for(let i= digit.length-1; i>=0; i--) {
    binaryNumber += digit[i];
}

console.log(binaryNumber);
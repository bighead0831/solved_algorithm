const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

let maxNum = 0;
for(let i=0; i<=parseInt(c/a); i++) {
    let tmpNum = 0;
    for(let j=0; j<=parseInt(c/b); j++)
        if(a*i+b*j <= c)
            tmpNum = a*i+b*j;
    maxNum = Math.max(maxNum, tmpNum);
}

console.log(maxNum);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const number = input[1].split(' ').map(Number);

function isPrime(num) {
    let divCnt = 0;
    if(num>1) {
        for(let i=2; i<=num; i++) {
            if(num%i === 0) divCnt++;
        }
        if(divCnt === 1) return true;
        else return false;
    } else {
        return false;
    }
}

let cnt = 0;
for(let i=0; i<n; i++) if(isPrime(number[i])) cnt++;
console.log(cnt);
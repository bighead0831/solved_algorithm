const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let [a, b] = [0, 100000];
for(let i=1; i<=n; i++) {
    let [ta, tb] = conditions[i-1];
    a = Math.max(a, ta/(2**i));
    b = Math.min(b, tb/(2**i));
}

console.log(Math.ceil(a));
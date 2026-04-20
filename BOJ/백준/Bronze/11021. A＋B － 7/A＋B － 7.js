const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift(0));

for(let i=0; i<n; i++) {
    let [a, b] = input.shift(0).split(' ').map(Number);
    console.log("Case #"+(i+1)+": "+(a+b));
}
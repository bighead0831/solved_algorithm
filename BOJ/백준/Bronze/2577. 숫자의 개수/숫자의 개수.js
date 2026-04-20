const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c] = input.slice(0,3).map(Number);

let num = a*b*c;
let chNum = num.toString().split('');

for(let i=0; i<=9; i++) {
    let cnt=0;
    for(let j=0; j<chNum.length; j++) {
        if(Number(chNum[j]) === i) cnt++;
    }
    console.log(cnt);
}
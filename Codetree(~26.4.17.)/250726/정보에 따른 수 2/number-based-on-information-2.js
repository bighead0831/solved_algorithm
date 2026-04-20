const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

function isSpecial(k) {
    let d1 = 1000;
    let d2 = 1000;

    for(let i=0; i<t; i++) {
        if(snData[i][0] === 'S') {
            let td1 = Math.abs(k-snData[i][1]);
            d1 = Math.min(d1, td1);
        } else if(snData[i][0] === 'N') {
            let td2 = Math.abs(k-snData[i][1]);
            d2 = Math.min(d2, td2);
        }
    }

    if(d1<=d2) return true;
    else return false;
}

let cnt = 0;
for(let k=a; k<=b; k++)
    if(isSpecial(k)) cnt++;

console.log(cnt);
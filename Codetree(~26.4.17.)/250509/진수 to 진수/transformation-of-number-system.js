const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

const an = n.split('').map(Number);

function A_to_Dec (a, n) {
    let num = 0;

    for(let i=0; i<n.length; i++) {
        num += n[(n.length-1)-i] * (a**i);
    }
    return num; 
}

function Dec_to_B (b, num) {
    let bnumRev = [];

    while (true) {
        if(num < b) {
            bnumRev.push(num);
            break;
        }
        bnumRev.push(num%b);
        num = parseInt(num/b);
    }

    let bnum = Array(bnumRev.length);
    for(let i=0; i<bnum.length; i++) {
        bnum[i] = bnumRev[bnum.length-1-i];
    }
    return bnum.join('');
}

console.log(Dec_to_B(b, A_to_Dec(a, n)));

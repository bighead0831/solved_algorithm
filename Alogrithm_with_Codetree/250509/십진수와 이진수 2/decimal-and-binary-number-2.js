const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

const binaryArr = binaryInput.split('');

function bin_to_17dec_to_bin(arr) {
    let num = 0;
    for(let i=0; i<arr.length; i++) {
        num += arr[(arr.length-1)-i] * (2**i);
    }
    num *= 17;
    
    let bnumRev = [];
    while (true) {
        if(num < 2) {
            bnumRev.push(num);
            break;
        }
        bnumRev.push(num%2);
        num = parseInt(num/2);
    }

    let bnum = [];
    for(let i=0; i<bnumRev.length; i++) {
        bnum[i] = bnumRev[bnumRev.length-1-i];
    }
    return bnum.join('');
}

console.log(bin_to_17dec_to_bin(binaryArr));
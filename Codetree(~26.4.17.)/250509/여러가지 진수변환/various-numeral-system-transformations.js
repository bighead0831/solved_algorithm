const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

function Dec_to_bNum(n, b) {
    let brev = [];
    while(true) {
        if(n < b) {
            brev.push(n);
            break;
        }
        brev.push(n%b);
        n=parseInt(n/b);
    }

    let bnum = Array(brev.length);
    for(let i=0; i< bnum.length; i++) {
        bnum[i] = brev[(bnum.length-1)-i];
    }
    return Number(bnum.join(''));
}

console.log(Dec_to_bNum(n,b));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

const binaryNum = binaryStr.split('').map(Number);

function Bin_to_Dec (arr) {
    let num = 0;
    for(let i=0; i<arr.length; i++) {
        num += arr[(arr.length-1)-i]*(2**i)
    }
    return num;
}

console.log(Bin_to_Dec(binaryNum));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function countUpperComplex(arr) {
    let result = 1;
    let cnt = 1;

    for(let i=1; i<n; i++) {
        if(arr[i]>t && arr[i-1]>t) {
            cnt++;
            if(result < cnt) result = cnt;
        } else {
            cnt = 1;
        }
    }
    return result;
}

console.log(countUpperComplex(arr));
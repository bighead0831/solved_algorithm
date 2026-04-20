const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1].split('');

// Please Write your code here.
let cnt = 0;
for(let i=0; i<n-2; i++) {
    if(string[i] === 'C') {
        for(let j=i+1; j<n-1; j++) {
            if(string[j] === 'O') {
                for(let k=j+1; k<n; k++) {
                    if(string[k] === 'W') cnt++;
                }
            }
        }
    }
}

console.log(cnt);
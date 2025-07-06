const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let result = s;
for(let i=0; i<n-1; i++) {
    for(let j=i; j<n; j++) {
        let sum = 0;
        for(let k=0; k<n; k++)
            if(k!= i && k!=j) sum += arr[k];
        result = Math.min(result, Math.abs(sum-s));
    }
}

console.log(result);
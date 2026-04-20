const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

for(let i=1; i<=n; i++) {
    for(let j=0; j<n-i; j++) {
        process.stdout.write(' ');
    }
    for(let j=0; j<i; j++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}
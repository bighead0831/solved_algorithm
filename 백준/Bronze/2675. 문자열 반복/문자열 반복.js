const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);
const problems = input.slice(1);

for(let i=0; i<num; i++) {
    let p = problems[i].split(' ');
    let n = Number(p[0]);
    let str = p[1].split('');
    for(let j=0; j<str.length; j++) {
        for(let k=0; k<n; k++) process.stdout.write(str[j]);
    }
    process.stdout.write('\n');
}

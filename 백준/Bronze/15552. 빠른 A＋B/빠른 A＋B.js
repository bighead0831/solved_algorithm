const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1);

let answer = '';
for(let i=0; i<n; i++) {
    let [num1, num2] = commands[i].split(' ').map(Number);
    answer += num1+num2+'\n';
}

console.log(answer);

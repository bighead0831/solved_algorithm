const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

let reward = 0;
if(a===b && a===c) {
    reward = 10000+a*1000;  
} else if(a!=b && b!=c && c!=a) {
    let bigNum = a;
    if(bigNum < b) bigNum = b;
    if(bigNum < c) bigNum = c;
    reward = bigNum*100;
} else {
    if(a===b) {
        reward = 1000+a*100;
    } else if(b===c) {
        reward = 1000+b*100;
    } else {
        reward = 1000+c*100;
    }
}

console.log(reward);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let elapsedTime = 0;
let [h, m] = [a, b];

while (true) {
    if(h===c && m===d) {
        break;
    }
    elapsedTime += 1;
    m += 1;

    if(m==60) {
        m = 0;
        h += 1;
    }
}

console.log(elapsedTime);
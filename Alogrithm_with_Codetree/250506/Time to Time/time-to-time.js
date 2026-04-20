const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let elapsedTime = 0;
let [h, m] = [a, b];

while (h!=c || m!=d) { // H:M이 C:D가 아닐 경우 반복
    elapsedTime += 1;
    m += 1;

    if(m==60) {
        m = 0;
        h += 1;
    }
}

console.log(elapsedTime);
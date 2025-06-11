const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0], 10);

// Please Write your code here.
let coin2 = 0;
let coin5 = 0;

coin5 = parseInt(n/5);
coin2 = parseInt((n-coin5*5)/2);

while(n!=coin5*5+coin2*2) {
    coin5 -= 1;
    coin2 = parseInt((n-coin5*5)/2);
    if(coin5 === 0 && coin2*2 != n) {coin2 = -1;} // 2원, 5원 동전으로 n원을 만들 수 없을 때는 -1
}

console.log(coin5+coin2);
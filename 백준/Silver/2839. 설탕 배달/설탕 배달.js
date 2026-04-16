const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0], 10);

let bag3 = 0;
let bag5 = 0;

bag5 = parseInt(n/5);
bag3 = parseInt((n-bag5*5)/3);


while(n!=bag5*5+bag3*3) {
    if(bag5 != 0) {bag5 -= 1;}
    bag3 = parseInt((n-bag5*5)/3);
    if(bag5 === 0 && bag3*3 != n) {bag3 = -1; break;} 
}

console.log(bag5+bag3);
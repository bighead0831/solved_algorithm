const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]); 
let v = Number(input[2]);

let day = (v-b) / (a-b);

if ( 0 < (v-b) % (a-b))
    day++;

console.log(parseInt(day));
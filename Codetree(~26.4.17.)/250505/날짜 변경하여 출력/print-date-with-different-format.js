const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('.');

let str = input[1]+'-'+input[2]+'-'+input[0];

console.log(str);
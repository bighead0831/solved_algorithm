const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('-');

let m = input[0];
let d = input[1];
let y = input[2];

console.log(y+'.'+m+'.'+d);
const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('-');

const front = input[1];
const back = input[2];

let result = input[0]+'-'+back+'-'+front;

console.log(result);
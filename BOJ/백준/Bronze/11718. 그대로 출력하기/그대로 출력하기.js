const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const result = input.slice(0).join('\n');
console.log(result);
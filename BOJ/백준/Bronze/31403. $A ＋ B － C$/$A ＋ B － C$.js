const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const nums = input.slice(0);

const [a, b, c] = [nums[0], nums[1], Number(nums[2])];
let ab = Number(a+b);

console.log(Number(a)+Number(b)-c);
console.log(ab-c);
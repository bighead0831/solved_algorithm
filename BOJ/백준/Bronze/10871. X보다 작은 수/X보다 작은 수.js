const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n,x] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

for(let i=0; i<n; i++) {
    if(x>nums[i]) process.stdout.write(nums[i]+ ' ');
}
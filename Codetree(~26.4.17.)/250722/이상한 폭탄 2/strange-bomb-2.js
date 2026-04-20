const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

let boom = -1;
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(i===j) continue;
        if(nums[i] === nums[j] && Math.abs(i-j)<=k) 
            boom = Math.max(boom, nums[i]); 
    }
}

console.log(boom);
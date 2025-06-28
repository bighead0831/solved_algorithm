const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n); //.map(Number);  * 삭제

// Please Write your code here.
const MAX = 5;
let nums = Array(n).fill(0).map(()=>Array(MAX).fill(0)); // 주어진 수를 저장할 다섯자리수 배열 초기화

for(let i=0; i<n; i++) { // nums 배열에 n개의 수 저장
    let tmpnum = arr[i].split('');
    for(let j=MAX-tmpnum.length; j<MAX; j++)
        nums[i][j] = Number(tmpnum[j-(MAX-tmpnum.length)]);
}

let maxSum = 0;
for(let i=0; i<n-2; i++) {
    for(let j=i+1; j<n-1; j++) {
        for(let k=j+1; k<n; k++) {
            let tmpSum = 0;
            let chkOver = false;
            for(let u=0; u<MAX; u++) {
                if(nums[i][u]+nums[j][u]+nums[k][u]>=10) chkOver = true;
                else { tmpSum += 10**(MAX-u-1)*(nums[i][u]+nums[j][u]+nums[k][u]); }
            }
            if(!chkOver) { maxSum = Math.max(maxSum, tmpSum); }
        }
    }
}
console.log(maxSum);
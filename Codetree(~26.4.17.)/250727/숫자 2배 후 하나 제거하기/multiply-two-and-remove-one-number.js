const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let minDiffSum = Number.MAX_SAFE_INTEGER;
for(let i=0; i<n; i++) { // 한 개 숫자 선택해 2배
    arr[i] *= 2; 

    for(let j=0; j<n; j++) { // 한 개 숫자 선택해 제외
        let tmpArr = [];
        for(let k=0; k<n; k++) {
            if(k===j) continue;
            tmpArr.push(arr[k]);
        }

        let diffSum = 0;
        for(let j=1; j<n-1; j++)
            diffSum += Math.abs(tmpArr[j]-tmpArr[j-1]);
            
        minDiffSum = Math.min(minDiffSum, diffSum);
    }
    arr[i] /= 2; 
}

console.log(minDiffSum);
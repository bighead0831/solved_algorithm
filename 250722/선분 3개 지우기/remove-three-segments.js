const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let cnt = 0;
for(let i=0; i<n-2; i++) {
    for(let j=i+1; j<n-1; j++) {
        for(let k=j+1; k<n; k++) {
            
            let arr = Array(101).fill(0);
            for(l=0; l<n; l++) {
                if(l===i || l===j || l===k) continue; // i번, j번, k번 선분 제외한 모든 선분 좌표계에 입력
                for(let t=segments[l][0]; t<=segments[l][1]; t++)
                    arr[t] += 1; // 선분 있으면 각 좌표에 +1
            }

            let ohNo = 0; // 모든 선분 안 겹치는 경우
            for(let k=0; k<101; k++) {
                if(arr[k] >= 2) { // 선분 겹치는 경우 확인되면 바~~로 break!
                    ohNo = 1; 
                    break;
                }
            }

            if(ohNo === 0) cnt++; // 모든 선분 안 겹치면 cnt++
        }
    }
}

console.log(cnt);
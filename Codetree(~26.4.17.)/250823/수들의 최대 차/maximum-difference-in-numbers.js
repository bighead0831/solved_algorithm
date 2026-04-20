const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

let result = 0;
for(let i=0; i<n; i++) { // 숫자 하나 고르기
    for(let j=i+1; j<n; j++) { // 고른 숫자 제외하고 한 개 더 고르기
        if(Math.abs(arr[j]-arr[i]) <= k) { // 고른 두 숫자의 차가 k를 넘지 않으면 뽑을 수 있는 최대 갯수 고르기
            let cnt = 0;
            for(let k=0; k<n; k++) {
                if(Math.min(arr[j], arr[i])<=arr[k] && Math.max(arr[j], arr[i])>=arr[k])
                    cnt++;
            }
            result = Math.max(result,cnt);
        }
    }
}
console.log(result);
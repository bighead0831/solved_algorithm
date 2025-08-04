const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);


const result = [];
for(let i=0; i<n; i++) {
    let min = 100;
    for(let j=0; j<n; j++) {
        let good = true;
        for(let k=0; k<i; k++) { // 이미 결과에 집어 넣은 작은 수는 제외
            if(result[k] === arr[j]) good = false;
        }
        if(good) min = Math.min(min, arr[j]); // 가장 작은 순으로 결과에 집어넣기
    }
    result.push(min);
}

console.log(result.join(' '));
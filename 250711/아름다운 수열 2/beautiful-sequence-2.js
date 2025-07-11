const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let result = 0;
for(let i=0; i<=N-M; i++) {
    let tmpA = []; // 수열 A 중 크기 M 구간
    for(let j=0; j<M; j++) 
        tmpA.push(A[i+j]);

    let chkA = Array(M).fill(1);
    for(let j=0; j<M; j++)
        for(let k=0; k<M; k++)
            if(tmpA[k] === B[j]) 
                chkA[k]--;

    let cnt = 0;
    for(let j=0; j<M; j++)
        if(chkA[j] === 1) cnt++;
    if(cnt === 0) result++;
}

console.log(result);
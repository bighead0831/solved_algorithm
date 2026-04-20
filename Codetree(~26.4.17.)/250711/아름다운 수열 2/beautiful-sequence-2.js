const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

function cmp(a,b) {return a-b;}

let result = 0;
for(let i=0; i<=N-M; i++) {
    let tmpA = []; // 수열 A 중 크기 M 구간
    for(let j=0; j<M; j++) 
        tmpA.push(A[i+j]);

    let tmpB = B;
    tmpA.sort(cmp); // 오름차순 정렬
    tmpB.sort(cmp); // 오름차순 정렬
    
    let cnt = 0;
    for(let j=0; j<M; j++)
        if(tmpA[j] === tmpB[j]) cnt++;

    if(cnt === M) result++;
}

console.log(result);
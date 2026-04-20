const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number); // n개의 돌, k이내 거리 점프가능
const arr = input[1].split(' ').map(Number);

function isPossible(a) {
    const isOK = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] <= a)
            isOK.push(i);
    }

    if(isOK[0] != 0) return false; // 1번 돌부터 시작하지 못하면 조건 불충족
    for(let i=0; i<isOK.length-1; i++) {
        const dist = isOK[i+1] - isOK[i]; // 각 돌들의 거리가 K이내 인지 확인
        if(dist > k) // K이내가 아니면 조건 불충족
            return false;
    }
    // 모든 조건 충족시 '참' 반환
    return true;
}

let maxMin = 100; // 거쳐간 지점에 적혀있는 수들 중 최댓값이 최소일 때 저장할 변수
for(let a=1; a<=100; a++) { // maxMin에 들어갈 변수 1~n까지 가능한지 검사
    if(isPossible(a)) { // k 이내로 점프하여 n번에 도달할 경우
        maxMin = Math.min(maxMin, a); // maxMin에 최솟값 저장
    }
}

console.log(maxMin);
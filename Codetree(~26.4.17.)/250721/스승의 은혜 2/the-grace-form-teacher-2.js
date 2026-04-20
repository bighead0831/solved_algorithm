const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number); // N of students. B of budget
const p = input.slice(1, 1 + n).map(Number); // Price of Presents

const price = p.sort((a,b)=>a-b); // 가격이 싼 것부터 구매해야 더 많이 살 수 있음. (This is KeyPoint)

let maxPresent = 0;
for(let i=0; i<n; i++) {
    let useMoney = 0; // 사용한 금액
    let cnt = 0; // 선물 구입 개수
    for(let j=0; j<n; j++) {
        if(i===j) { // 0~n-1번 선물까지 돌아가면서 반값 할인쿠폰 먹이기
            useMoney += price[j]/2;
            cnt++;
        } else { // 한 개를 제외한 다른 것들에는 원래 가격 매기기
            useMoney += price[j];
            cnt++;
        }

        if(b-useMoney < 0) {cnt--; break;} // 사용한 금액이 예산초과이면 선물 하나 빼고 break!
        else if(b-useMoney === 0) {break;} // 사용한 금액이 예산에 딱 맞으면 그냥 break!
    }
    maxPresent = Math.max(maxPresent, cnt); // 구입 선물 최대 갯수 구하기
}

console.log(maxPresent); // 최대 선물 갯수 출력
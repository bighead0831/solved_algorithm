const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 각 월의 일수

// 카운팅 시작 m1월 d1일
let m = m1, d = d1;

// 경과 일수 초기화 (시작일수 포함해야 해서 1 덧셈)
let elapsed_day=1;

while(true) {
    if(m == m2 && d == d2) break;

    elapsed_day += 1; // 1일 경과
    d += 1;

    if(d > num_of_days[m]) {
        m += 1; // 다음달로 넘어감
        d = 1; // 다음달로 넘어가며 일수 초기화
    }
}

console.log(elapsed_day);
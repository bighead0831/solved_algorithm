const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.
let aRace = [];
let bRace = [];

// 시간단위 a의 위치 배열에 기록
for(let i=0; i<n; i++) {
    for(let j=1; j<=aData[i][1]; j++) {
        aRace.push(aData[i][0]);
    }
}
let a = Array(aRace.length).fill(0);
a[0]=aRace[0];
for(let i=1; i<a.length; i++) {
    a[i] += aRace[i]+a[i-1];
}

// 시간단위 b의 위치 배열에 기록
for(let i=0; i<m; i++) {
    for(let j=1; j<=bData[i][1]; j++) {
        bRace.push(bData[i][0]);
    }
}
let b = Array(bRace.length).fill(0);
b[0]=bRace[0];
for(let i=1; i<b.length; i++) {
    b[i] += bRace[i]+b[i-1];
}

// 각 시간대별 선두 배열에 기록
let cnt = 0;
let time = a.length; // 어차피 a와 b의 이동시간은 동일 (조건)

// 최초 선두 설정
let pioneer = 'a'
if(a[0] < b[0]) pioneer = 'b';

for(let i=1; i<time; i++) {
    if(a[i] > b[i]) {
        if(pioneer != 'a') {
            pioneer = 'a';
            cnt++;
        }
    } else if(a[i] < b[i]) {
        if(pioneer != 'b') {
            pioneer = 'b';
            cnt++;
        }
    }
}

console.log(cnt);
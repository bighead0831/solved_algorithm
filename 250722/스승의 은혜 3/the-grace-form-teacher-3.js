const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number); // n명의 학생, b원의 예산
const pArr = []; // 각 선물 가격
const sArr = []; // 각 선물 배송비
const psArr = []; // 각 선물 배송비+가격
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    pArr.push(p);
    sArr.push(s);
    psArr.push(p+s);
}



let maxStudent = 0;
for(let i=0; i<n; i++) {
    let student = 0;
    let useMoney = pArr[i]/2 + sArr[i]; // i번 학생에게 반값쿠폰 먹이기

    let tmpPSarr = []; // i번 학생을 제외한 다른 학생들의 선물+배송비 배열
    for(let k=0; k<n; k++) {
        if(k===i) continue;
        tmpPSarr.push(psArr[k]);
    }

    tmpPSarr.sort((a,b) => a-b); // 작은 순서대로 정렬 (이유: 작은 것부터 확인하면 선물 가능한 학생 최대 명수 쉽게 도출 가능)

    for(let j=0; j<n; j++) {
        if(j===i) continue; // i번 학생을 제외한 모든 학생

        useMoney = tmpPSarr[j];
        student++;

        if(b-useMoney < 0) { student--; break;} 
        else if (b === useMoney) break;
    }

    maxStudent = Math.max(maxStudent, student);
}

console.log(maxStudent);
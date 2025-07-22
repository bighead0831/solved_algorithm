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
    let useMoney = pArr[i]/2 + sArr[i]; // i번 학생에게 반값쿠폰 먹이기

    let tmpPSarr = []; // i번 학생을 제외한 다른 학생들의 선물+배송비 배열
    for(let k=0; k<n; k++) {
        if(k===i) continue;
        tmpPSarr.push(psArr[k]);
    }
    tmpPSarr.sort((a,b) => a-b); // 작은 순서대로 정렬 (이유: 작은 것부터 확인하면 선물 가능한 학생 최대 명수 쉽게 도출 가능)

    let student = 1;
    for(let j=0; j<n; j++) {
        useMoney += tmpPSarr[j]; // 예산 적게 드는 학생부터 예산 사용
        student++; // 선물 준 학생 수 증가

        if(b < useMoney) { student--; break;} // 선물 주고 났더니 예산초과이면 학생수 1명 줄이고 break
        else if (b === useMoney) break; // 예산에 딱 맞으면 그대로 break
    }

    maxStudent = Math.max(maxStudent, student);
}

console.log(maxStudent);
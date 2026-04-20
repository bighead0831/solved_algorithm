const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

let arr = new Array(101).fill(''); // 배열에 푯말 든 사람 배치
for (let i = 0; i < n; i++) {arr[people[i].pos] = people[i].letter;}

let maxcnt = 0
let result = 0;
for (let i=1; i<=100; i++) { // 사진 크기 1~100 (사실 0~99인데 이렇게 설정함)
    for(let j=0; j<101-i; j++) { // 사진 이동 처음부터 끝까지
        let gcnt = 0;
        let hcnt = 0;
        let samecnt = 0;
        for(let k=j; k<j+i; k++) { // 사진 내 탐색
            if(arr[k] === 'G') gcnt++;
            else if(arr[k] === 'H') hcnt++;
        }
        if(gcnt === hcnt) samecnt = gcnt;

        if(maxcnt < samecnt) {
            result = i-1; // 사진크기(각 위치의 차) 0~99이므로 1빼주기
            maxcnt = samecnt;
        }
    }
}

console.log(result);
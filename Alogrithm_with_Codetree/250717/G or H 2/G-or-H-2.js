const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];

let MIN = 100;
let MAX = 0;
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
    MIN = Math.min(MIN, pos);
    MAX = Math.max(MAX, pos);
}

// 일직선 상에 푯말 든 사람 세우기
let arr = new Array(101).fill('');
for(let i=0; i<n; i++) arr[people[i].pos] = people[i].letter;

let maxSize = 0;
for(let i=0; i<=MAX-MIN; i++) { // 사진크기 i(0 ~ MAX-MIN) 탐색
    for(let j=MIN; j<=MAX-i; j++) { // 탐색시작점 j(MIN ~ MAX-i) 탐색
        let gnum = 0;
        let hnum = 0;
        for(let k=j; k<=j+i; k++) { // 탐색시작점 j에서 i만큼 탐색
            if(arr[k] === 'G') {gnum++;}
            else if(arr[k] === 'H') {hnum++;}
        }
        if(arr[j] != '' && arr[j+i] != '') { // 처음과 끝이 비어있지 않고
            if((gnum != 0 && hnum === 0) // G로만 이루어져있거나
            || (gnum === 0 && hnum != 0) // H로만 이루어져있거나
            || (gnum != 0 && gnum === hnum)) { // G와 H가 동일한 갯수만큼 있을 때
            maxSize = Math.max(maxSize, i);
        }
        }
    }
}

console.log(maxSize);
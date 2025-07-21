const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// n: 사람 수, m: 치즈 수, d: 섭취기록, s: 질병기록
const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, cheese, t] = input[i].split(' ').map(Number);
    info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push({ p, t });
}

// Please write your code here.
let person = new Array(n+1).fill(0).map( () => Array(101).fill(0).map( () => Array(m+1).fill(0)) ); // 1~n번의 사람, 그리고 각 사람마다 100초의 시간 동안의 기록, 그리고 각 시간마다 먹은 치즈들 (3중배열!!)

for(let i=0; i<d; i++) { // 각 사람(배열)이 언제 치즈를 먹었는지 입력
    const [p, cheese, t] = [info1[i].p, info1[i].cheese, info1[i].t];
    let cnt = 0;
    while(1) {
        if(person[p][t][cnt] === 0) {
            person[p][t][cnt] = cheese; 
            break;
        } else cnt++;
    }
}

let susArr = new Array(m+1).fill(0);
for(let i=0; i<s; i++) { // 아픈 사람(배열)이 아픈 시점 이전에 먹은 치즈 모두 모아보기
    const [p, t] = [info2[i].p, info2[i].t];
    for(let j=1; j<t; j++) {
        for(let k=0; k<person[p][j].length; k++) { // p번 사람이 j시각에 먹은 모든 치즈(k)
            susArr[person[p][j][k]] += 1;
        }
    }
}

// 의심되는 치즈 (아픈 사람이 모두 먹은 치즈 고르기)
let max = 0;
for(let i=1; i<susArr.length; i++) {
    max = Math.max(max, susArr[i]);
}

let suspect = new Set(); // 상한 것으로 의심되는 치즈 모음(Set 활용)
for(let i=1; i<susArr.length; i++) {
    if(susArr[i] === max)
        suspect.add(i);
}

let needPill = 0; // 약이 필요할 것으로 의심되는 환자
for(let i=1; i<=n; i++) {
    let personSet = new Set(); // 이제는 언제 먹었느냐 보다 무엇을 먹었느냐가 중요하므로 Set 활용
    for(let j=0; j<101; j++) {
        for(let k=0; k<=m; k++)
            personSet.add(person[i][j][k]);
    }
    personSet.delete(0); // 빈 것은 빼주고, 치즈만 남기자

    for (const num of suspect) {
        if(personSet.has(num)) {
            needPill++;
            break; // 상한 것으로 의심되는 치즈 하나라도 먹은 적 있으면 약 주는 사람으로 간주하고 break!
        }
    }
}

console.log(needPill);
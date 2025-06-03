const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
// n명의 개발자, 최대 k번 악수까지만 전염시킴, 처음 감염자 p번 개발자, 총 악수 t회
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    // 총 t번 악수를 하는데, 각 횟수마다 time(일시)에 person1과 person2가 악수한다
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}
// Please write your code here.
shakes.sort((a, b) => a.time - b.time); // 악수 시점에 따라 시간순 정렬

let developer = Array(n).fill(0).map( () => Array(2).fill(0)); // n명의 개발자 초기화 (배열), 1열은 감염여부 / 2열은 감염시킨 횟수
developer[p-1][0] = 1; // 최초 p번 개발자 감염

// 악수 실시
for(let i=0; i<t; i++) {
    const P1 = shakes[i].person1-1;
    const P2 = shakes[i].person2-1;
    if(developer[P1][0] === 1 && developer[P2][0] != 1) { // 만일 person1이 감염자, person2가 비감염자일때
        if(developer[P1][1] < k) { // person1이 k번 이상 감염 안 시켰으면
            developer[P1][1] += 1; // person1의 감염횟수 증가
            developer[P2][0] = 1; // person2는 감염
            //developer[P2][1] += 1; // person2의 감염횟수 증가 X -> 감염 최초 악수는 횟수 미포함
        }
    } else if(developer[P1][0] != 1 && developer[P2][0] === 1) { // 만일 person2이 감염자, person1가 비감염자일때
        if(developer[P2][1] < k) { // person2이 k번 이상 감염 안 시켰으면
            developer[P2][1] += 1; // person2의 감염횟수 증가
            developer[P1][0] = 1; // person1는 감염
            //developer[P1][1] += 1; // person1의 감염횟수 증가 X -> 감염 최초 악수는 횟수 미포함
        }
    } else if(developer[P1][0] === 1 && developer[P2][0] === 1) { // 만일 person1, person2 모두 감염자일때
        if(developer[P1][1] < k && developer[P2][1] < k) { // person1, person2 모두 k번 이상 감염 안 시켰으면
            developer[P1][1] += 1; // person1의 감염횟수 증가
            developer[P2][1] += 1; // person2의 감염횟수 증가
        } else if(developer[P1][1] < k && developer[P2][1] >= k) { // person2만 k번 이상 감염시켰을때
            developer[P1][1] += 1; // person1의 감염횟수 증가
        } else if(developer[P1][1] >= k && developer[P2][1] < k) { // person1만 k번 이상 감염시켰을때
            developer[P2][1] += 1; // person2의 감염횟수 증가
        }
    }
}

// 개발자 감염여부 출력
let result = Array(n).fill(0);
for(let i=0; i<n; i++) result[i] = developer[i][0];
console.log(result.join(''));
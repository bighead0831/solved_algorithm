const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
/* 
조건 : x축과 y축에 평행한 두 직선은 모두 짝수에 위치할 것  ex. (2,0), (0,4), ...
결과 : 4등분한 좌표계에 각 영역 중 가장 많은 점의 수가 최소일 경우의 점 개수 M

area1 : (a,b) -> x<a && y<b          area2 | area1
area2 : (a,b) -> x>a && y<b         y------+------
area3 : (a,b) -> x>a && y>b          area3 | area4
area4 : (a,b) -> x<a && y>b                x
*/

let balance_min = n;
for(let i=0; i<=50; i++) {
    for(let j=0; j<=50; j++) {
        let [cnt1, cnt2, cnt3, cnt4] = [0, 0, 0, 0];
        x = 2*i;
        y = 2*j;
        for(let k=0; k<n; k++) {
            let [a,b] = points[k];
            if(x<a && y<b) cnt1++;
            else if(x>a && y<b) cnt2++;
            else if(x>a && y>b) cnt3++;
            else if(x<a && y>b) cnt4++;
        }
        let max = Math.max(cnt1, cnt2, cnt3, cnt4);
        balance_min = Math.min(balance_min, max);
    }
}
console.log(balance_min);
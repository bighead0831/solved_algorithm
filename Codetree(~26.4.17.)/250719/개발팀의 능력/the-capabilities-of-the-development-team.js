const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);
const n = abilities.length;
let result = 5000;

let total = 0;
for(let i=0; i<n; i++) total += abilities[i];

function cmpDiff(i, j, k, l) {
    let team1 = abilities[i]+abilities[j];
    let team2 = abilities[k]+abilities[l];
    let team3 = total-team1-team2;

    if(team1 != team2 && team2 != team3 && team3 != team1) { // 조건: 각 팀의 능력치가 서로 다를 경우에만 고려
        let max = Math.max(team1, team2, team3);
        let min = Math.min(team1, team2, team3);
        result = Math.min(result, max-min);
    }
}

for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        for(let k=0; k<n; k++) {
            for(let l=k+1; l<n; l++) {
                if(k===i||k===j||l===i||l===j) continue;
                else cmpDiff(i, j, k, l);
            }
        }
    }
}

if(result === 5000) console.log(-1); // 각 팀의 능력치가 서로 다른 경우를 못 만들 경우, -1 출력
else console.log(result);
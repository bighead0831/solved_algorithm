const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.
let result = 30000000;

let all = 0;
for(let i=0; i<6; i++) all+=arr[i];

for(let i=0; i<4; i++) {
    for(let j=i+1; j<5; j++) {
        for(let k=j+1; k<6; k++) {
            let team1 = arr[i] + arr[j] + arr[k];
            let team2 = all - team1;
            result = Math.min(result, Math.abs(team1-team2));
        }
    }
}

console.log(result);
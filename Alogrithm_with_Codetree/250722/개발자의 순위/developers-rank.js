const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));


let alwaysWin = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(i===j) continue;

        let cnt = 0;
        for(let l=0; l<k; l++) {
            let [a, b] = [0, 0];
            for(let t=0; t<n; t++) {
                a = (arr[l][t]===i+1) ? t+1 : a;
                b = (arr[l][t]===j+1) ? t+1 : b;
            }
            if(a<b) cnt++
        }
            
        
        if(cnt === k) alwaysWin++;
    }
}

console.log(alwaysWin);
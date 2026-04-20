const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

let max_same = 0;
for(let i=0; i<m; i++) {
    let cnt = 0;

    let [a, b] = pairs[i];
    if(a>b) {
        let t = a;
        a = b;
        b = t;
    }

    for(let j=0; j<m; j++) {
        let [ta, tb] = pairs[j];
        if(ta>tb) {
            let tt = ta;
            ta = tb;
            tb = tt;
        }

        if(ta === a && tb === b) cnt++;
    }
    max_same = Math.max(max_same, cnt);
}

console.log(max_same);
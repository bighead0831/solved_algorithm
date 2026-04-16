const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const t = Number(input[0]);
const data = input.slice(1);

for(let i=0; i<t; i++) {
    let [H, W, N] = data[i].split(' ').map(Number);
    let cnt = 0;
    let rH = 0, rW = 0;
    
    for(let w=1; w<=W; w++) {
        rW = w;
        for(let h=1; h<=H; h++) {
            rH = h;
            cnt++;
            if(cnt === N) break;
        }
        if(cnt === N) break;
    }
    console.log(rH*100+rW);
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

let [d1, h1, m1] = [11, 11, 11];
const [d2, h2, m2] = [A, B, C];

function elapsed_Time() {
    let eTime = 0;

    if(d2<11) return -1;
    else if (d2==11 && h2<11) return -1;
    else if (d2==11 && h2==11 && m2<11) return -1;

    while(true) {
        if(d1==d2 && h1==h2 && m1==m2) break;

        eTime += 1;
        m1 += 1;

        if(m1>=60) { // 60분 경과시 시간 추가 및 분 초기화
            h1 += 1;
            m1 = 0;
        }

        if(h1>=24) { // 24시간 경과시 일수 추가 및 시 초기화
            d1 += 1;
            h1 = 0;
        }
    }
    return eTime;
}

console.log(elapsed_Time());
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1).map(line => line.split(' '));

class Command {
    constructor (distance, direction) {
        this.distance = Number(distance);
        this.direction = direction;
    }
}

let comm = Array(n);
for(let i=0; i<n; i++) {
    comm[i] = new Command(commands[i][0], commands[i][1]);
}

// 점 이동시키기
let arr = Array(2002).fill(0);
let curPoint = 1000;
for(let i=0; i<n; i++) {
    let tmp = 0;
    if(comm[i].direction == 'L') {
        for(let j=1; j<=comm[i].distance; j++) {
            arr[curPoint-j] += 1;
            tmp = curPoint-j;
        }
    } else {
        for(let j=1; j<=comm[i].distance; j++) {
            arr[curPoint+j] += 1;
            tmp = curPoint+j;
        }
    }
    curPoint = tmp;
}

// 2번 이상 지나간 영역 검색
let cnt = 0;
for(let i=0; i<2002; i++) {
    if(arr[i] > 1) cnt++;
}

console.log(cnt);
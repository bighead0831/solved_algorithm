const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

class Point {
    constructor(value, num) { // value = 각 자리의 값, num = 각 자리의 번호
        this.value = value;
        this.num = num;
    }
}

function cmpValue(prev, cur) {
    return prev.value-cur.value;
}

let [originPoints, changePoints] = [Array(n), Array(n)];
for(let i=0; i<n; i++) {
    originPoints[i] = new Point(arr[i], i+1);
    changePoints[i] = new Point(arr[i], i+1);
}

changePoints.sort(cmpValue);


// 시간복잡도가 너무 커져버리는데.... 일단 정답은 나오니 제출...
let result = Array(n);
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(originPoints[i].num == changePoints[j].num && originPoints[i].value == changePoints[j].value) {
            result[i] = j+1;
            break;
        }
    }
}
console.log(result.join(' '));


//points.forEach(points => process.stdout.write(points.num+' '));
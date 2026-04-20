const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

class Point {
    // 좌표(x, y)와 점의 번호 부여
    constructor (x, y, num) {
        this.x = x;
        this.y = y;
        this.num = num;
    }

    // 맨하턴 거리로 거리 구하는 함수
    getDistance () {
        if(this.x>=0 && this.y>=0 ) return this.x+this.y;
        else if(this.x>=0 && this.y<0) return this.x-this.y;
        else if(this.x<0 && this.y>=0) return this.y-this.x;
        else if(this.x<0 && this.y<0) return -this.x-this.y;
    }
}

// 원점에서의 거리가 가까운 순으로 정렬하는 함수
function cmp(prev, cur) {
    return prev.getDistance() - cur.getDistance();
}

// 점 초기화 및 점 위치 입력과 넘버링 
let point = Array(n);
for(let i=0; i<n; i++) point[i] = new Point(points[i][0], points[i][1], i+1);

// 점 정렬
point.sort(cmp);

// 정렬된 점 순서대로 출력
for(let i=0; i<n; i++) console.log(point[i].num);
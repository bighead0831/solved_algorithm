const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' ')); // W, B로 채워진 R x C 격자

// 조건 2번: 무조건 아래, 오른쪽으로 각 한칸 이상씩 이동.  * dx/dy알고리즘 사용
const dr = 1; // 무조건 아래로 이동
const dc = 1; // 무조건 오른쪽으로 이동

// 조건 3번: 도착했을 때 cnt의 값이 정확히 3이어야 함.

let result = 0; // 가능한 경우의 수

let [y, x] = [0, 0]; // 첫 시작점 (0,0) 초기화

function jump(y, x, cnt = 0) {
    // process.stdout.write('(2)'+y+' '+x+' '+grid[y][x]+' '+cnt+'   ');
    if(cnt===3 && y===R-1 && x===C-1 ) {
        result++;
        //process.stdout.write('\t[result]'+result+'\n\n');
    } 
    else {
        for(let i=y+1; i<R; i++) {
            for(let j=x+1; j<C; j++) {
                if(grid[i][j] != grid[y][x]) {
                    //process.stdout.write('(1)'+y+'|'+x+' '+i+' '+j+' '+grid[i][j]+' '+cnt+'   ');
                    jump(i, j, cnt+1);
                }
            }
        }
    }
}

jump(y,x);
console.log(result);

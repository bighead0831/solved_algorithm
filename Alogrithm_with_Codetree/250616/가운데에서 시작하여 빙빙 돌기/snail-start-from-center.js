const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const dc = [1, 0, -1, 0]; // R U L D __ Column
const dr = [0, -1, 0, 1]; // R U L D __ Row

let arr = Array(n).fill(0).map( ()=>Array(n).fill(0) );

// Algorithm 
// R U L D 순으로 방향이 바뀌며 각 방향마다 나아갈 방향에 숫자가 있는지 검사한다.
// 만일 숫자가 있으면 기존 방향으로 계속 가고, 숫자가 없으면 다음 방향으로 꺾어서 간다.

let r = (n-1)/2, c = (n-1)/2; // 시작지점
let cnt = 1;
arr[r][c]=cnt;

let dir = 0; // 방향은 R로 시작
if(n>1) {
    r += dr[dir], c += dc[dir], cnt++;
    arr[r][c]=cnt;
}

function inRange(r,c) {return r>=0 && r<n && c>=0 && c<n;}
function isEmpty(r,c) {return arr[r][c]===0;}

while(cnt<=n*n) {
    const ndir = (dir+1)%4;
    let nr = r+dr[ndir];
    let nc = c+dc[ndir];
    if(inRange(nr,nc)) {
        if(isEmpty(nr,nc)) {
            r = nr, c = nc, dir = ndir;
            cnt++;
            arr[r][c] = cnt;
        } else {
            nr = r+dr[dir], nc = c+dc[dir];
            if(inRange(nr,nc)) {
                if(isEmpty(nr,nc)) {
                    r = nr, c = nc;
                    cnt++;
                    arr[r][c] = cnt;
                } else {break;}
            } else {
                break;
            }
        }
    } else {
        nr = r+dr[dir], nc = c+dc[dir];
        if(inRange(nr,nc)) {
            if(isEmpty(nr,nc)) {
                r = nr, c = nc;
                cnt++;
                arr[r][c] = cnt;
            } else {break;}
        } else {
            break;
        }
    }
}

arr.forEach(row => {console.log(row.join(" "))});
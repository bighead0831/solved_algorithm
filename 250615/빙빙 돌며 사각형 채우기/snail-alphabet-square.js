const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.
const engStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let engChar = engStr.split('');

let arr = Array(n).fill('.').map( ()=>Array(m).fill('.') );

let dx = [1, 0, -1, 0]; // R, D, L, U for Column
let dy = [0, 1, 0, -1]; // R, D, L, U for Row
let dir = 0; // initialize direction to R

function inRange(r, c) {return r>=0 && r<n && c>=0 && c<m;}
function isEmpty(r, c) {return arr[r][c]==='.';}

function fillArr() {
    let r=0, c=0, cnt=0;
    arr[r][c] = engChar[cnt];

    let nr=r, nc=c; // next row, column
    while(n*m > 1) {
        nr = r + dy[dir], nc = c + dx[dir];
        if(inRange(nr,nc)) {
            if(isEmpty(nr,nc)) {
                r = nr, c = nc;
                cnt = (cnt+1)%engChar.length;
                arr[r][c] = engChar[cnt];
            } else {
                dir = (dir+1)%4;
                nr = r + dy[dir], nc = c + dx[dir];
                if(inRange(nr,nc)) {
                    if(isEmpty(nr,nc)===false) {
                        break;
                    }
                } else {
                    break;
                }
            }
        } else {
            dir = (dir+1)%4;
        }
    }
}

fillArr();
arr.forEach(row => {console.log(row.join(" "))});
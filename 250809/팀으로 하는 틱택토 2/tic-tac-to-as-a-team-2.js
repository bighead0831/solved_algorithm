const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));

let cnt = 0;
for(let i=0; i<3; i++) {
    
    const column = [];
    const row = [];
    for(let j=0; j<3; j++) {
        // 가로
        column.push(board[i][j]);

        // 세로
        row.push(board[j][i]);
    }
    const setCol = new Set(column);
    if(setCol.size === 2) cnt++;

    const setRow = new Set(row);
    if(setRow.size === 2) cnt++;
}

// 대각선
const diagonal = [board[0][0], board[1][1], board[2][2]];
const setDia = new Set(diagonal);
if(setDia.size === 2) cnt++;

// 역대각선
const rdiagonal = [board[2][0], board[1][1], board[0][2]];
const setRdia = new Set(rdiagonal);
if(setRdia.size === 2) cnt++;

console.log(cnt);
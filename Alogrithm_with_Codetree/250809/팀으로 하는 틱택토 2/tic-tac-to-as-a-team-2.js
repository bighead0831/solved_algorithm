const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));

let cnt = 0; // 이길 수 있는 팀의 갯수
let teaming = []; // 중복된 팀을 거르기 위한 장치
for(let i=0; i<3; i++) {
    
    const column = [];
    const row = [];
    for(let j=0; j<3; j++) {
        column.push(board[j][i]); // 가로
        row.push(board[i][j]); // 세로
    }
    const setCol = new Set(column);
    if(setCol.size === 2) {
        if(teaming.length === 0) {
            teaming.push([...setCol]); 
            cnt++;
        } else {
            let is_okay=true;
            for(let j=0; j<teaming.length; j++) {
                let [x,y] = [teaming[j][1], teaming[j][0]];
                let c = [...setCol];
                if(x===c[1] && y===c[0]) {is_okay=false; break;}
            }
            if(is_okay) {
                teaming.push([...setCol]); 
                cnt++;
            }
        }
    }

    const setRow = new Set(row);
    if(setRow.size === 2) {
        if(teaming.length === 0) {
            teaming.push([...setRow]); 
            cnt++;
        } else {
            let is_okay=true;
            for(let j=0; j<teaming.length; j++) {
                let [x,y] = [teaming[j][1], teaming[j][0]];
                let r = [...setRow];
                if(x===r[1] && y===r[0]) {is_okay=false; break;}
            }
            if(is_okay) {
                teaming.push([...setRow]); 
                cnt++;
            }
        }
    }
}

// 대각선
const diagonal = [board[0][0], board[1][1], board[2][2]];
const setDia = new Set(diagonal);
if(setDia.size === 2) {
    if(teaming.length === 0) {
        teaming.push([...setDia]); 
        cnt++;
    } else {
            let is_okay=true;
            for(let j=0; j<teaming.length; j++) {
                let [x,y] = [teaming[j][1], teaming[j][0]];
                let d = [...setDia];
                if(x===d[1] && y===d[0]) {is_okay=false; break;}
            }
            if(is_okay) {
                teaming.push([...setDia]); 
                cnt++;
            }
        }
}

// 역대각선
const rdiagonal = [board[2][0], board[1][1], board[0][2]];
const setRdia = new Set(rdiagonal);
if(setRdia.size === 2) {
    if(teaming.length === 0) {
        teaming.push([...setRdia]); 
        cnt++;
    } else {
            let is_okay=true;
            for(let j=0; j<teaming.length; j++) {
                let [x,y] = [teaming[j][1], teaming[j][0]];
                let r = [...setRdia];
                if(x===r[1] && y===r[0]) {is_okay=false; break;}
            }
            if(is_okay) {
                teaming.push([...setRdia]); 
                cnt++;
            }
        }
}
console.log(cnt);